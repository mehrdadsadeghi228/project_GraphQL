const {GraphQLString, GraphQLObjectType , GraphQLBoolean, GraphQLInt, GraphQLList } = require('graphql');
const { AuthorBlogs } = require('./Author.type');

const BookBlogsType =new GraphQLObjectType({
  name: 'BookBlogsType',
  fields:
  { 
      _id:{type:GraphQLString},
      title: { type: GraphQLString },
      author:{type: AuthorBlogs},
      description: { type: GraphQLString },
      image: { type: GraphQLString },
      publisher: { type: GraphQLString },
      price: { type: GraphQLInt },
      stock: { type: GraphQLInt },
      isAvailable: { type: GraphQLBoolean },
      version: { type: GraphQLInt },
      category:{type:new GraphQLList(GraphQLString)},

  }

})

module.exports ={
  BookBlogsType
}