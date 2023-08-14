const { GraphQLObjectType, GraphQLSchema, GraphQLFloat, GraphQLInt, GraphQLString } = require('graphql');
const { AuthorResolver, PickUpBookResolver } = require('./queries/queries');
const { AllBookResolver, AddBookResolver, searchOnCategoryBookResolver } = require('./queries/Book.queries');
const { userResolver, AddUserResolver, AddUserFavoriteBookResolver } = require('./queries/user.queies');

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        Author: AuthorResolver,
        Books: AllBookResolver,
        PickUpBook: PickUpBookResolver,
        AddingBook:AddBookResolver,
        searchOnCategory:searchOnCategoryBookResolver,
        getUser:userResolver,
        addUser:AddUserResolver,
        Add_Fav:AddUserFavoriteBookResolver,
    }
});

const RootMutation = new GraphQLObjectType(
    {
        name: 'RootMutation',
        fields: {}
    }
);
const GRAPH_QL_SCHEMA = new GraphQLSchema({
    query: RootQuery,
    //  mutation:RootMutation
});

module.exports = {
    GRAPH_QL_SCHEMA
}
