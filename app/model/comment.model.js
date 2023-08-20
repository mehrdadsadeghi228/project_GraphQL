const { default: mongoose } = require("mongoose");
const { BookModel } = require("./Book.models");
const { userModel } = require("./user.model");

const commentSchema=new mongoose.Schema({
    titleComment:{type:String,require:true},
    descriptionComment:{type:String,require:true},
    likeComment:{type:Boolean},
    disLikeComment:{type:Boolean},
    BookRef:{type:mongoose.Types.ObjectId,ref:'BookSchema',require:true},
    userRef:{type:mongoose.Types.ObjectId,ref:'userSchema',require:true},
},{
    timestamps:true
});



module.exports={
    commentModel:mongoose.model("commentSchema",commentSchema)
};