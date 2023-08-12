const { GraphQLObjectType, GraphQLSchema, GraphQLFloat, GraphQLInt, GraphQLString }=require('graphql');
const  BookResolver = require('./queries/queries');
const { AuthorResolver } = require('./queries/queries');

const RootQuery= new GraphQLObjectType({
    name:'RootQuery',
    fields:{    
        Author:AuthorResolver,
       // Books:BookResolver

    }
});

const RootMutation=new GraphQLObjectType(
    {
        name:'RootMutation',
        fields:{    }   

    }
);
const GRAPH_QL_SCHEMA=new GraphQLSchema({
        query:RootQuery,
      //  mutation:RootMutation
});

module.exports={
    GRAPH_QL_SCHEMA
}
