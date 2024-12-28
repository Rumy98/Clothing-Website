const Cloth = require("./cloth.model");

const postACloth=async(req,res)=>{
    try{
        const newCloth=await Cloth({...req.body});
        await newCloth.save();
        res.status(200).send({message:"Cloth shown", cloth:newCloth})
    }catch(error){
        console.error("Error creating cloth",error);
        res.status(500).send({message:"Failed to create cloth"})

    }

}

const getAllClothes=async(req,res)=>{
    try {
        const clothes=await Cloth.find().sort({createdAt:-1});
        res.status(200).send(clothes)
    } catch (error) {
        console.error("Error showing cloth",error);
        res.status(500).send({message:"Failed to show cloth"})
    }
}

const getSingleCloth=async(req,res)=>{
    try {
        const {id}=req.params;
        const cloth=await Cloth.findById(id);
        if(!cloth){
            res.status(404).send({message:"Cloth not found"})
        }
        res.status(200).send(cloth)
    } catch (error) {
        console.error("Error showing cloth",error);
        res.status(500).send({message:"Failed to show cloth"})
    }
}

const UpdateCloth=async(req,res)=>{
    try {
        const{id}=req.params;
        const updatedCloth=await Cloth.findByIdAndUpdate(id, req.body,{new:true});
        if(!updatedCloth){
            res.status(404).send({message:"Cloth not found"})
        }
        res.status(200).send({
            message:"cloth updated",
            cloth:updatedCloth

        })
    } catch (error) {
        console.error("Error updating cloth",error);
        res.status(500).send({message:"Failed to update cloth"})
    }
}

const deleteACloth=async(req,res)=>{
    try {
        const {id}=req.params;
        const deletedCloth=await Cloth.findByIdAndDelete(id);
        if(!deletedCloth){
            res.status(404).send({message:"Cloth not Found"})
        }
        res.status(200).send({
            message:"Cloth deleted succeessfully",
            book:deletedCloth
        })
    } catch (error) {
        console.error("Error deleting cloth",error);
        res.status(500).send({message:"Failed to delete"})
    }

}

module.exports={
    postACloth,
    getAllClothes,
    getSingleCloth,
    UpdateCloth,
    deleteACloth


}