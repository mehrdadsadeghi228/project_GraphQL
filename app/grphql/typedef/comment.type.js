const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLBoolean } = require("graphql");
const { BookBlogsType } = require("./Book.type");
const { userTypeGraphQl } = require("./user.type");

const commentTypeGraphQl=new GraphQLObjectType({

    name: 'commentTypeGraphQl',
    
    fields:
    
    {   
        titleComment:{type:GraphQLString},
        descriptionComment:{type:GraphQLString},
        likeComment:{type:GraphQLBoolean},
        disLikeComment:{type:GraphQLBoolean},
        BookRef:{type: BookBlogsType},
        UserRef:{type: GraphQLString},
      
    }
    
})


module.exports ={
    commentTypeGraphQl
};