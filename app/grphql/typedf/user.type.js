const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { AuthorBlogs } = require("./Author.type");
const BookType = require("./Book.type");
const commentTypeGraphQl  = require("./comment.type");

const userTypeGraphQl=new GraphQLObjectType({
    name: 'userTypeGraphQl',
    fields:
    { 
        name:{type:GraphQLString},
        lastName:{type:GraphQLString},
        email:{type:GraphQLString},
        favorite_author:{AuthorBlogs},
        favorite_Book:{BookType},
       Comment:{commentTypeGraphQl}
    }
    
});
module.exports={
    userTypeGraphQl
}