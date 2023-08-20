const { default: mongoose } = require("mongoose");
const { AuthorModel } = require("./Author.Model");
const { BookModel } = require("./Book.models");

const userSchema=new mongoose.Schema({
    userName:{type:String,require:true,unique:true},
    name:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true},
    favorite_author:{type:[mongoose.Types.ObjectId],ref:'AuthorModel',require:false},
    favorite_Book:{type:[mongoose.Types.ObjectId],ref:'BookModel',require:false},
  


},{
    timestamps:true
});



module.exports={
    userModel:mongoose.model("userSchema",userSchema)
};