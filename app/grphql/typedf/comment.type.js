const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const BookType = require("./Book.type");
const  userTypeGraphQl  = require("./user.type");

const commentTypeGraphQl=new GraphQLObjectType({
    name: 'commentTypeGraphQl',
    fields:
    { 
        titleComment:{type:GraphQLString},
        descriptionComment:{type:GraphQLString},
        likeComment:{type:GraphQLString},
        disLikeComment:{type:GraphQLString},
        BookRef:{BookType},
        userRef:{userTypeGraphQl}
      
    }
    
});

module.exports={
    commentTypeGraphQl
}