const { BookModel } = require("../../model/Book.models");
const BookType  = require("../typedf/Book.type");
const { AuthorBlogs } = require("../typedf/Author.type");
const { AuthorModel } = require("../../model/Author.Model");
const { GraphQLObjectType } = require("graphql/type/definition");
const { GraphQLList } = require("graphql");

const BookResolver = {
        type :  new GraphQLList(BookType),
        resolve : async () => {
        console.log("have request for book ");
        const BookValue = await BookModel.find();
        console.log("have request for book ",BookValue);
        return BookValue
        }

};

const AuthorResolver = {
    type : new GraphQLList(AuthorBlogs),
    resolve : async () => {
        const AuthorValue = await AuthorModel.find();
        return AuthorValue
    }

    
};
module.exports = {
    BookResolver,
    AuthorResolver
};
