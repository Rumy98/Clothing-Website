const express = require('express');
const User = require('./user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

const JWT_SECRET=process.env.JWT_SECRET_KEY

// Admin login route
router.post("/admin", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the admin user by username
        const admin = await User.findOne({ username });

        // If no admin is found, return an error
        if (!admin) {
            return res.status(404).send({ message: "Admin not found!" });
        }

        // If the password doesn't match, return an error
        if (admin.password !== admin.password) {
            return res.status(401).send({ message: "Invalid password" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            {
                id: admin._id,
                username: admin.username,
                password: admin.password,
                role:admin.role
            },
            JWT_SECRET,
            {expiresIn:"1h"}
            // 'your_jwt_secret', // Replace with your secret key
            // { expiresIn: '1h' } // Optional: Set an expiration time for the token
        )
        return res.status(200).json({
            message:"Successfull authentication",
            token:token,
            user:{
                username: admin.username,
                role:admin.role
            }
        })

        // res.status(200).send({ message: "Login successful", token });
    } catch (error) {
        console.error("Failed to login as admin", error);
        res.status(401).send({ message: "Failed to login as admin" });
    }
});

module.exports = router;


