const { GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean } = require("graphql");
const { BookModel } = require("../../model/Book.models");
const BookType = require("../typedef/Book.type");
const { AuthorBlogsType } = require("../typedef/Author.type");
const { AnyType, ResponseType } = require("../typedef/public.type");

const AddBookMutations = {
    type: ResponseType,
    args:{
        author:{type:AuthorBlogsType},
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        category:{type:new GraphQLList(GraphQLString)},
        publisher: { type: GraphQLString },
        price: { type: GraphQLInt },
        stock: { type: GraphQLInt },
        isAvailable: { type: GraphQLBoolean },
        version: { type: GraphQLInt }
    },
    resolve: async (_,args) => {
        console.log("have request for book Adding a book ");
        const {title,author,description,image,category,publisher,price,stock,isAvailable,version}=args;
        const BookValue = await BookModel.create({
            title:title,author:author,description:description,image:image,
            category:category,publisher:publisher,price:price,stock:stock,
            isAvailable:isAvailable,version:version
        });
        console.log("book save with id : ", BookValue._id);
        return {"book is save with id :":BookValue._id}
    }

};






module.exports = {
    
    AddBookMutations
}