const { GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean } = require("graphql");
const { BookModel } = require("../../model/Book.models");
const {ResponseType } = require("../typedef/public.type");
const { AuthorBlogsType } = require("../typedef/Author.type");
const createError = require("http-errors");
const {StatusCodes: HttpStatus} = require("http-status-codes");
const AddBookMutations = {
    type: ResponseType,
    args:{
        _id:{type:GraphQLString},
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        publisher: { type: GraphQLString },
        price: { type: GraphQLInt },
        stock: { type: GraphQLInt },
        isAvailable: { type: GraphQLBoolean },
        version: { type: GraphQLInt },
        category:{type:new GraphQLList(GraphQLString)},
        author:{type:GraphQLString},
    },
    resolve: async (_,args) => {
        console.log("have request for book Adding a book ");
        const {title,author,description,image,category,publisher,price,stock,isAvailable,version}=args;
        let message;
        const BookValue = await BookModel.create({
            title:title,author:author,description:description,image:image,
            category:category,publisher:publisher,price:price,stock:stock,
            isAvailable:isAvailable,version:version
        });
        console.log("book save with id : ", BookValue._id);
        message={"book is save with id :":BookValue._id}
        return {
            statusCode: HttpStatus.OK,
            data: {
                message
            }
        }
    }

};






module.exports = {
    
    AddBookMutations
}