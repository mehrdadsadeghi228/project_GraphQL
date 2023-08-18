const { GraphQLList, GraphQLString } = require("graphql");
const commentModel = require("../../model/comment.model");
const { userModel } = require("../../model/user.model");
const { commentTypeGraphQl } = require("../typedf/comment.type");
const { userTypeGraphQl } = require("../typedf/user.type");
const createError = require("http-errors");
const { AuthorBlogs } = require("../typedf/Author.type");
const BookType = require("../typedf/Book.type");

const userResolver = {
    type: new GraphQLList(userTypeGraphQl),
    resolve: async () => {
        const AuthorValue = await userModel.find();
        return AuthorValue
    }


};

const commentResolver = {
    type: new GraphQLList(commentTypeGraphQl),
    resolve: async () => {
        const AuthorValue = await commentModel.find();
        return AuthorValue
    }


};
const AddUserResolver = {
    type: new GraphQLList(userTypeGraphQl),

    args: {
        userName: { type: GraphQLString },
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString }
      //  favorite_author: { type: new GraphQLList(AuthorBlogs) },
//favorite_Book: { type: new GraphQLList(BookType) },
       // Comment: { type: new GraphQLList(commentTypeGraphQl) }
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

const AddUserFavoriteBookResolver = {
    type: new GraphQLList(userTypeGraphQl),

    args: {
        userName: { type: GraphQLString },
        id: { type: GraphQLString },
        favorite_author: { type: AuthorBlogs },
        favorite_Book: { type:BookType },
    },

    resolve: async (_, args) => {
        const { favorite_Book,favorite_author,userName,id } = args
        const user=await userModel.find(  { userName:{$regex : userName } } , { _id:{$regex : id }  } );
        if(!user) throw new createError.BadRequest(" Client is exist !");

        const userValue = await userModel.findByIdAndUpdate(id ,{ favorite_Book: favorite_Book._id ,favorite_author: favorite_author._id  }  );

        return userValue
    }


};

module.exports={
    AddUserFavoriteBookResolver,
    AddUserResolver,
    userResolver
}