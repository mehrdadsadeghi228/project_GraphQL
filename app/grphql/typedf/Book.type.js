const {GraphQLObjectType,GraphQLString,GraphQLBoolean,GraphQLInt,GraphQLList}=require('graphql');
const { AuthorBlogs } = require('./Author.type');

const BookBlogs=new GraphQLObjectType({
    name:'BookBlogs',
    fields:{
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        image:{type:GraphQLString},
        price:{type:GraphQLInt},
        stock:{type:GraphQLInt},
        publisher:{type:GraphQLString},
        date:{type:GraphQLString},
        isAvailable:{type:GraphQLBoolean},
        version:{type:GraphQLInt}
    }

});



module.exports={
    BookBlogs
}