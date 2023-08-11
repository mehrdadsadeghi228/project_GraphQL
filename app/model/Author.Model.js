const { default: mongoose } = require("mongoose");
const AuthorSchema=new mongoose.Schema({
    first_name:{type:String,require:true},
    last_name:{type:String,require:true},
    email:{type:String,require:true},
    
});
const AuthorModel=mongoose.model("AuthorModel",AuthorSchema)

module.exports={
    AuthorModel
};