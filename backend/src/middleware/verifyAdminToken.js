const jwt = require('jsonwebtoken');

const JWT_SECRET=process.env.JWT_SECRET_KEY

const  verifyAdminToken=(req,res,next)=>{
    const token=req.headers['authorization']?.split(' ')[1];

    console.log(token)

    if(!token){
        return res.status(401).json({message:'Access denied.No token'});
    }
    jwt.verify(token,JWT_SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({message:"Invalid credential"});
        }
        req.user=user;
        next();
    })

}

module.exports=verifyAdminToken;