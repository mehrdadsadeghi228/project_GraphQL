const { GraphQLObjectType, GraphQLSchema, GraphQLFloat, GraphQLInt, GraphQLString } = require('graphql');
const { AllBookResolver, SearchBookByTitleResolver, searchOnCategoryBookResolver } = require('./queries/Book.queries');
const { getAllUserResolver } = require('./queries/user.queries');
const { AuthorResolver } = require('./queries/author.queries');
const { AddBookMutations } = require('./mutation/book.mutations');
const { AddUserFavoriteBookMutations,AddUserMutations ,getUserFavoriteMutations} = require('./mutation/user.mutations');

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        Author: AuthorResolver,
        Books: AllBookResolver,
        searchBookByTitle: SearchBookByTitleResolver,
        searchBookOnCategory:searchOnCategoryBookResolver,
        getUser:getAllUserResolver,
    }
});

const RootMutation = new GraphQLObjectType(
    {
        name: "Mutation",
        fields: {
            AddBookMutations,
            AddUserMutations,
            AddUserFavoriteBookMutations,
            getUserFavoriteMutations
                }
    }
);
const graphQLSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

module.exports = {
    graphQLSchema
}
