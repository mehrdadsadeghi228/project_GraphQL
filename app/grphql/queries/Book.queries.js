const { GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean } = require("graphql");
const { BookModel } = require("../../model/Book.models");
const  {BookBlogsType}= require("../typedef/Book.type");

const AllBookResolver = {
    type: new GraphQLList(BookBlogsType),
    resolve: async () => {
        console.log("have request for book ");
        const BookValue = await BookModel.find();
        console.log("have request for book ", BookValue);
        return BookValue
    }

};

const searchOnCategoryBookResolver = {
    type: new GraphQLList(BookBlogsType),
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

const SearchBookByTitleResolver = {
    type :  new GraphQLList(BookBlogsType),
    args:{
        title:{ type : GraphQLString }
    },
    resolve : async (_,args) => {
    const {title} = args
    const PickUpBookValue = await BookModel.find({"title" : {$regex : title}});
    return PickUpBookValue
    }

};
module.exports = {
    AllBookResolver,
    searchOnCategoryBookResolver,
    SearchBookByTitleResolver
}