const { GRAPH_QL_SCHEMA } = require("../grphql/index.graphql");


function graphqlConfig(req, res){
    return {
        schema: GRAPH_QL_SCHEMA,
        graphiql: true,
        context: {req, res}
    }
}

module.exports = {
    graphqlConfig
}