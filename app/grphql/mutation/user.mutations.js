
const { GraphQLList, GraphQLString } = require("graphql");
const { userModel } = require("../../model/user.model");
const createError = require("http-errors");
const { ResponseType } = require("../typedef/public.type");
const { commentTypeGraphQl } = require("../typedef/comment.type");
const { BookBlogsType } = require("../typedef/Book.type");
const { AuthorBlogsType } = require("../typedef/Author.type");
const {StatusCodes: HttpStatus} = require("http-status-codes");
const { checkExistBook, checkExistAuthor, checkExistUser } = require("../utils");
const { default: mongoose } = require("mongoose");


const AddUserMutations = {
    type: ResponseType,
    args: {
        userName:{type:GraphQLString},
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        favorite_author: { type:  GraphQLString },
        favorite_Book: { type: GraphQLString },
        Comment: { type: GraphQLString }
    },

    resolve: async (_, args) => {
      try {
        const { userName,name, last_name, email } = args
        const user=await userModel.find({userName:userName});
        if(user.length>0) {
            return{
                statusCode: HttpStatus.UNAUTHORIZED,
                data: {
                    message:' Client is exist !'
                }
             }
        }
        const userValue = await userModel.create({
            userName:userName,name:name,lastName:last_name,email:email
        });
        message={}
        return {
            statusCode: HttpStatus.OK,
            data: {
                message:`User is Created with id : ${userValue._id}  `
            }
        }
      } catch (error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            data: {
                message:` we have Error : ${error} `
            }
      }
    }
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
        const B_Id=checkExistBook(favorite_Book_id)
        const A_id=checkExistAuthor(favorite_author_id)
        const u_id=checkExistUser(id)

        if(u_id.length<0 && B_Id.length<0 && A_id.length<0 ) {
            return {
                statusCode: HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS,
                data: {
                    message:` the value of send is not valid `
                }
             }
        }
        
        const t =  await userModel.findOne({
                                            _id:id,
                                            favorite_author:favorite_author_id,
                                        });  
        console.log(t);
        if(t){
            return {
                statusCode: HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS,
                data: {
                    message:` the Author is add in favorite before `
                }
             } 
        }
              
          const t2 = await userModel.findOne({
                                        _id:id,
                                        favorite_Book:favorite_Book_id
                                    });
          if(t2 ){
            return {
                statusCode: HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS,
                data: {
                    message:` the Book is add in favorite before `
                }
             } 
        }
        console.log(t2);

        const userValue = await userModel.updateOne(
                                                    
                                                    {_id:id,
                                                    userName} ,
                                                    {$push:{ favorite_Book: favorite_Book_id ,favorite_author: favorite_author_id  }}
                                                  );

        return {
            statusCode: HttpStatus.OK,
            data: {
                message:"Your favorite is add ",
            }
         }

    }
}




const getUserFavoriteMutations = {
    type: ResponseType,
    args:{
        _id:{type:GraphQLString}
    },
    resolve: async (_,args) => {
        
            const {_id}=args
            console.log(" user: ");
            checkExistUser(_id);
            const UserResponsive = await userModel.findById(_id).populate([
                                                            {path:'favorite_author'},
                                                            {path:"favorite_Book"}
                                                        ]);

            console.log(" user: ",UserResponsive);
            return{
                statusCode:202,
                data:UserResponsive
            } 



      }

};

module.exports={
    AddUserMutations,
    AddUserFavoriteBookMutations,
    getUserFavoriteMutations
}