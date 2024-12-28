const express=require('express')
const Cloth =require('./cloth.model');
const { postACloth, getAllClothes, getSingleCloth, UpdateCloth, deleteACloth } = require('./cloth.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router=express.Router();

router.post("/create-cloth",verifyAdminToken,postACloth)

router.get("/",getAllClothes)
router.get("/:id",getSingleCloth)

router.put("/edit/:id",verifyAdminToken,UpdateCloth)

router.delete("/:id",verifyAdminToken,deleteACloth)
module.exports=router;