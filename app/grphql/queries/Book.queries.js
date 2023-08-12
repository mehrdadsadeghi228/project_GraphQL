const { GraphQLList, GraphQLString } = require("graphql");
const BookType = require("../typedf/Book.type");
const { BookModel } = require("../../model/Book.models");

const AllBookResolver = {
    type: new GraphQLList(BookType),
    resolve: async () => {
        console.log("have request for book ");
        const BookValue = await BookModel.find();
        console.log("have request for book ", BookValue);
        return BookValue
    }

};
module.exports = {
    AllBookResolver
}