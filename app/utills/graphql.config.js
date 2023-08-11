const { GRAPH_QL_SCHEMA } = require("../grphql/index.graphql");

function graphQL_config(req, res) {
    return {
        schema: GRAPH_QL_SCHEMA,
        graphiql: true,
        context: { req, res }
    }
}
module.exports = {
    graphQL_config
}