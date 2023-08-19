const { GraphQLList } = require("graphql");
const commentModel = require("../../model/comment.model");

const commentResolver = {
    type: new GraphQLList(commentTypeGraphQl),
    resolve: async () => {
        const AuthorValue = await commentModel.find();
        return AuthorValue
    }


};
