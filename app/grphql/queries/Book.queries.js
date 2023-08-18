const { GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean } = require("graphql");
const BookType = require("../typedef/typedef");
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

const searchOnCategoryBookResolver = {
    type: new GraphQLList(BookType),
    args:{
        categoryItem:{type:new GraphQLList(GraphQLString)}
    },
    resolve: async (_,args) => {
        const {categoryItem}=args;
        console.log("have request for searching in Category ");
        const BookValue = await BookModel.find( { category : { $in : categoryItem } } );
        console.log("have request for book ", BookValue);
        return BookValue
    }

};

const AddBookResolver = {
    type: new GraphQLList(BookType),
    args:{
        author:{type:GraphQLString},
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
    AllBookResolver,
    AddBookResolver,
    searchOnCategoryBookResolver
}