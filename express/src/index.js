"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express_graphql_1 = require("express-graphql");
var graphql_1 = require("graphql");
var schema = (0, graphql_1.buildSchema)("\n\ttype Query {\n\t\thello: String\n\t}\n");
var root = {
    hello: function () {
        return 'Hello world!';
    }
};
var app = (0, express_1["default"])();
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000);
console.log("Running a Graphql API server at localhost:4000/graphql");
