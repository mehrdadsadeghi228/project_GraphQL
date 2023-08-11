const { route } = require('express/lib/router');
const { AdminRouter } = require('./admin.router');
const Route = require('express/lib/router/route');
const { graphqlHTTP } = require('express-graphql');
const { graphQL_config } = require('../utills/graphql.config');

const Router = require('express').Router();

Router.use("/admin", AdminRouter);
Router.use("/graphql", graphqlHTTP(graphQL_config));
module.exports = {
    AllRouters: Router
};


