const { GraphQLObjectType, GraphQLSchema, GraphQLFloat, GraphQLInt, GraphQLString }=require('graphql');
const { BookResolver } = require('./queris/blog.query');

const RootQuery= new GraphQLObjectType({
    name:'RootQuery',
    fields:{    
       books:BookResolver
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
})
module.exports={
    GRAPH_QL_SCHEMA
}
