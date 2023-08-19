const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const {BookBlogsType }= require("./Book.type");
const  {userTypeGraphQl}  = require("./user.type");

const commentTypeGraphQl=new GraphQLObjectType({
    name: 'commentTypeGraphQl',
    fields:
    { 
        titleComment:{type:GraphQLString},
        descriptionComment:{type:GraphQLString},
        likeComment:{type:GraphQLString},
        disLikeComment:{type:GraphQLString},
        BookRef:{type:new  GraphQLList(BookBlogsType)},
        userRef:{type:  new GraphQLList(userTypeGraphQl)},
      
    }
    
})


module.exports ={
    commentTypeGraphQl
};