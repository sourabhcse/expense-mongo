const jwt=require('jsonwebtoken');
const User = require('../models/users');


const auth=async(req,res,next) =>{
    try{
    
        const token=req.header('Authorization');
        console.log(token)
        const user=jwt.verify(token,process.env.TOKEN)
        console.log('auth',user.userId)
        User.findById(user.userId).then((user=>{
            console.log('userrrr',user._id)
            req.user=user;
            console.log(req.user._id)
            console.log(req.user)
            next();
        }))    

    .catch(err=>{
        return res.status(500).json({success:false})
    })
}catch(err){
    console.log(err)
    res.status(500).json({success:false})

}   
    
}
module.exports=auth;