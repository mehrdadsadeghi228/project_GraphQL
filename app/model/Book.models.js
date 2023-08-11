const { default: mongoose } = require("mongoose");
const { AuthorModel } = require("./Author.Model");

const BookSchema=new mongoose.Schema({
    title:{type:String,require:true},
    author:{type:mongoose.Types.ObjectId,ref:'AuthorModel',require:true},
    description:{type:String,require:true},
    image:{type:String,require:true},
    price:{type:Number,require:true},
    stock:{type:Number,require:true},
    category:{type:[String],require:true},
    publisher:{type:String,require:true},
    date:{type:Date,default:Date.now},
    isAvailable:{type:Boolean,default:true},
    version:{type:Number}


},{
    timestamps:true
});



module.exports={
    BookModel:mongoose.model("BookSchema",BookSchema)
};