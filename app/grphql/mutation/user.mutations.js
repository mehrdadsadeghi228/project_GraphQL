
const { GraphQLList, GraphQLString } = require("graphql");
const commentModel = require("../../model/comment.model");
const { userModel } = require("../../model/user.model");
const createError = require("http-errors");
const { AuthorBlogsType } = require("../typedef/Author.type");
const { BookBlogsType } = require("../typedef/Book.type");
const { commentTypeGraphQl } = require("../typedef/comment.type");
const {  ResponseType } = require("../typedef/public.type");



const AddUserMutations = {
    type: ResponseType,
    args: {
        userName: { type: GraphQLString },
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        favorite_author: { type: new GraphQLList(AuthorBlogsType) },
        favorite_Book: { type: new GraphQLList(BookBlogsType) },
        Comment: { type: new GraphQLList(commentTypeGraphQl) }
    },

    resolve: async (_, args) => {
        const { userName,name, last_name, email } = args
        const user=await userModel.find({userName:userName});
        if(user) throw new createError.BadRequest(" Client is exist !");
        const userValue = await userModel.create({
            userName:userName,name:name,lastName:last_name,email:email
        });
        return userValue._id
    }


};

const AddUserFavoriteBookMutations = {
    type: ResponseType,
    args: {
        userName: { type: GraphQLString },
        id: { type: GraphQLString },
        favorite_author_id: { type: GraphQLString },
        favorite_Book_id: { type:GraphQLString },
    },

    resolve: async (_, args) => {
        const { favorite_Book_id,favorite_author_id,userName,id } = args
        const user=await userModel.find(  { userName:{$regex : userName } } , { _id:{$regex : id }  } );
        if(!user) throw new createError.BadRequest(" Client is exist !");

        const userValue = await userModel.findByIdAndUpdate(id ,{ favorite_Book: favorite_Book_id ,favorite_author: favorite_author_id  }  );

        return userValue
    }
}

module.exports={
    AddUserMutations,
    AddUserFavoriteBookMutations
}