const mongoose = require('mongoose');
const express = require('express');
const Order = require('../orders/order.model');
const Cloth = require('../clothes/cloth.model');

const router = express.Router();

// Route to calculate admin stats
router.get("/", async (req, res) => {
    try {
        // 1. Total number of orders
        const totalOrders = await Order.countDocuments();

        // 2. Total sales (sum of all totalPrice from orders)
        const totalSales = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: "$totalPrice" },
                }
            }
        ]);

        // 3. Trending clothes statistics
        const trendingClothesCount = await Cloth.aggregate([
            { $match: { trending: true } }, // Match only trending clothes
            { $count: "trendingClothesCount" } // Return the count of trending clothes
        ]);

        const trendingClothes = trendingClothesCount.length > 0 ? trendingClothesCount[0].trendingClothesCount : 0;

        // 4. Total number of clothes
        const totalClothes = await Cloth.countDocuments();

        // 5. Monthly sales (group by month and sum total sales for each month)
        const monthlySales = await Order.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } }, // Group by year and month
                    totalSales: { $sum: "$totalPrice" },  // Sum of totalPrice for each month
                    totalOrders: { $sum: 1 }  // Count total orders for each month
                }
            },
            { $sort: { _id: 1 } }  // Sort by month in ascending order
        ]);

        // 6. Total number of delivered orders
        const deliveredOrders = await Order.countDocuments({ status: "delivered" });

        // Final stats summary
        res.status(200).json({
            totalOrders,
            totalSales: totalSales[0]?.totalSales || 0,
            trendingClothes,
            totalClothes,
            monthlySales,
            deliveredOrders
        });

    } catch (error) {
        console.error("Error fetching admin stats:", error);
        res.status(500).json({ message: "Failed to fetch admin stats" });
    }
});

module.exports = router;
