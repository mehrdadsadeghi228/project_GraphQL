const { BookModel } = require("../../model/Book.models");
const BookType  = require("../typedef/Book.type");
const {  AuthorBlogsType } = require("../typedef/Author.type");
const { AuthorModel } = require("../../model/Author.Model");
const { GraphQLList, GraphQLString } = require("graphql");



const AuthorResolver = {
    type : new GraphQLList(AuthorBlogsType),
    resolve : async () => {
        const AuthorValue = await AuthorModel.find();
        return AuthorValue
    }

    
};

module.exports = {
    AuthorResolver
};