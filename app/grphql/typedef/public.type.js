const { GraphQLScalarType, GraphQLObjectType, GraphQLString } = require("graphql");
const { toObject, parseLiteral } = require("../utils");


const AnyType = new GraphQLScalarType({
    name: "anyType",
    parseValue : toObject,
    serialize : toObject,
    parseLiteral : parseLiteral
    
});

const ResponseType = new GraphQLObjectType({
    name: "responseType",
    fields : {
        statusCode : {type: GraphQLString},
        data : {type: AnyType}
    }
});

module.exports = {
    AnyType,
    ResponseType
}