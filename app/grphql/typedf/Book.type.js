const {GraphQLString, GraphQLObjectType , GraphQLBoolean, GraphQLInt, GraphQLList } = require('graphql');
const { AuthorBlogs } = require('./Author.type');

module.exports =new GraphQLObjectType({
  name: 'BookBlogs',
  fields:
  { 
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
      author:{type:AuthorBlogs},

  }

});
