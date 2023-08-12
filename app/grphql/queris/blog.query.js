const { GraphQLList } = require("graphql");
const { BookModel } = require("../../model/Book.models");
const { BookType } = require("../typedf/Book.type");

const BookResolver = {
    try:{
        type : new GraphQLList(BookType),
        resolve : async () => {
            return await BookModel.find();
        };
    }
         catch (error) {
        console.log(error);
    }
};
module.exports = {
    BookResolver
};
