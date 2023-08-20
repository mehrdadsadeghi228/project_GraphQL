const { GraphQLObjectType, GraphQLString, GraphQLList, graphql } = require("graphql");
const { AuthorBlogsType } = require("./Author.type");
const { BookBlogsType } = require("./Book.type");
const {commentTypeGraphQl}  = require("./comment.type");

const userTypeGraphQl=new GraphQLObjectType({
    name: 'userTypeGraphQl',
    fields:
    {   _id: {type: GraphQLString},
        name:{type:GraphQLString},
        lastName:{type:GraphQLString},
        email:{type:GraphQLString},
        favorite_author:{type: GraphQLList(AuthorBlogsType)},
        favorite_Book:{type: GraphQLList(BookBlogsType)},
       Comment:{type: GraphQLList(commentTypeGraphQl)},
    }
    
})

module.exports = {
    
    userTypeGraphQl
}