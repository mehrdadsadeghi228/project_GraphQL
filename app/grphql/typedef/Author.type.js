const {GraphQLObjectType,GraphQLString}=require('graphql');

const AuthorBlogsType=new GraphQLObjectType({
    name:'AuthorBlogsType',
    fields:{
        _id: {type: GraphQLString},
        first_name  : {type : GraphQLString},
        last_name  : {type : GraphQLString},
        email : {type : GraphQLString}
    }
})

module.exports={
    AuthorBlogsType
}