const {GraphQLObjectType,GraphQLString}=require('graphql');

const AuthorBlogs=new GraphQLObjectType({
    name:'AuthorBlogs',
    fields:{
    first_name:{type:GraphQLString},
    last_name:{type:GraphQLString},
    email:{type:GraphQLString},
    }
});
module.exports={

    AuthorBlogs
}