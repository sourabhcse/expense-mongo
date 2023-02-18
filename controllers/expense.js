const Expense=require('../models/expenses');
function isstringinvalid(string){
    if(string==undefined || string.length==0){
        return true
    }else{
        return false
    }
}
exports.postExpense=async(req,res,next)=>{
    try{
    const{expenseamount,description,category}=req.body;
    if(isstringinvalid(expenseamount) || isstringinvalid(description) || isstringinvalid(category)){
        return res.status(400).json({success:false,message:'parameter is missing'})
    }
    const expense =new Expense({expenseamount,description,category,userId:req.user})
    expense.save();
    res.status(201).json({expense,success:true})
}
    catch{err=>{
        return res.status(500).json({success:false,error:err})
    }
}

}
exports.getExpense=async(req,res,next)=>{
    try{
  const expenses= await Expense.find({userId:req.user._id})

    res.status(200).json({expenses,success:true})
    }catch(err){
        res.status(500).json({error:err,success:false}) 
    }
}
exports.deleteExpense=async(req,res,next)=>{
    try{
    const expenseid=req.params.expenseid;
    console.log(expenseid)
    if(isstringinvalid(expenseid)){
       return res.status(400).json({success:false,message:'bad parameter'})
    }
    const expense=await Expense.deleteOne({_id:expenseid,userId:req.user})
    res.status(200).json({success:true,message:'Deleted Successfully'})
}
catch(err){
    res.status(500).json({message:'internal Error',success:false})
}
}