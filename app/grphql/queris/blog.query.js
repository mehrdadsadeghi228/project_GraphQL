
const { GraphQLList } = require("graphql")
const { BookModel } = require("../../model/Book.models")
const { BookType } = require("../typedf/Book.type")

const BookResolver = {
    type : new GraphQLList(BookType),
    resolve : async () => {
       
        return await BookModel.find({})
    }
}
module.exports = {
    BookResolver
}
