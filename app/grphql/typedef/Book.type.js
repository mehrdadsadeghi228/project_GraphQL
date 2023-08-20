const {GraphQLString, GraphQLObjectType , GraphQLBoolean, GraphQLInt, GraphQLList } = require('graphql');
const { AuthorBlogsType } = require('./Author.type');

const BookBlogsType =new GraphQLObjectType({
  name: 'BookBlogsType',
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
      author:{type: new  GraphQLList(AuthorBlogsType)},


  }

})

module.exports ={
  BookBlogsType
}

/***
 * 
 *   title: { type: GraphQLString },
        author:{type:new  GraphQLList(AuthorBlogsType)},
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        category:{type:new GraphQLList(GraphQLString)},
        publisher: { type: GraphQLString },
        price: { type: GraphQLInt },
        stock: { type: GraphQLInt },
        isAvailable: { type: GraphQLBoolean },
        version: { type: GraphQLInt }
 */