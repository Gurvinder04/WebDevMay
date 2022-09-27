const ProductModel = require('./schema')
module.exports={
    getProduct:function(req,res){
        ProductModel.find({})
        .then(result=>{
            res.json({
                message:'getProduct function executed',
                data:result
            })
        })
    }
}