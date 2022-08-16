const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://root:amagicalword@cluster0.v0nbh9w.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log('connected to a database');
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})