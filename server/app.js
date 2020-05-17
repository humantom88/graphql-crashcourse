const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const { MONGO_CONNECTION, PORT } = require('./config')

mongoose.connect(MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('connected to database')
})

const app = express()

// Allow cross-origin requests
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log('Now listening requests on port: ' + PORT)
})