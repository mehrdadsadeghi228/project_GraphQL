const { GraphQLList, GraphQLString } = require("graphql");
const commentModel = require("../../model/comment.model");
const { userModel } = require("../../model/user.model");
//const { commentTypeGraphQl } = require("../typedef/comment.type");

const createHttpError = require("http-errors");
const { userTypeGraphQl } = require("../typedef/user.type");



const getAllUserResolver = {
    type: new GraphQLList(userTypeGraphQl),
    resolve: async () => {
        try {
            const AuthorValue = await userModel.find();
            if(!AuthorValue) return createHttpError.NotFound("we don't have any data for showing ");
            return AuthorValue
        } catch (error) {
            return createHttpError.InternalServerError(error)
        }
    }

};






module.exports={
    getAllUserResolver
}