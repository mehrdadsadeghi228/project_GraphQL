const { BookModel } = require("../../model/Book.models");
const BookType  = require("../typedf/Book.type");
const { AuthorBlogs } = require("../typedf/Author.type");
const { AuthorModel } = require("../../model/Author.Model");
const { GraphQLList, GraphQLString } = require("graphql");



const AuthorResolver = {
    type : new GraphQLList(AuthorBlogs),
    resolve : async () => {
        const AuthorValue = await AuthorModel.find();
        return AuthorValue
    }

    
};

const PickUpBookResolver = {
    type :  new GraphQLList(BookType),
    args:{
        title:{ type : GraphQLString }
    },
    resolve : async (_,args) => {
    const {title} = args
    console.log("have request for  PickUpBookResolver",title);
    ({"username" : {$regex : "son"}});
    const PickUpBookValue = await BookModel.find({"title" : {$regex : title}});
    console.log("have request for PickUpBookResolver Value: ",PickUpBookValue);
    return PickUpBookValue
    }

};

module.exports = {
    AuthorResolver,
    PickUpBookResolver
};
