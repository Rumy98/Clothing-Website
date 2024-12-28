const express = require('express');
const app=express()
const cors=require("cors");

const mongoose = require('mongoose');
const port =process.env.PORT||3000;
require('dotenv').config()

app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))

const clothRoutes=require('./src/clothes/cloth.route')
const orderRoutes=require("./src/orders/order.route")
const userRoutes=require("./src/users/user.route")
const adminRoutes=require("./src/stats/admin.stats")

app.use("/api/clothes",clothRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/auth",userRoutes)
app.use("/api/admin",adminRoutes)


async function main() {
  await mongoose.connect(process.env.DB_URL);
    app.use('/',(req,res)=>{
    res.send("Welcome bh");
});
}

main().then(()=>console.log("Mongodb runnuing")).catch(err => console.log(err));


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
