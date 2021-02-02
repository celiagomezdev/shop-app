const express = require('express')
const cors = require('cors')
const graphql = require('./graphql')

const app = express()
app.use(cors())
graphql.applyMiddleware({ app, path: '/graphql' })

const port = process.env.PORT || 4000
app.listen(port)
console.log(`Running a GraphQL API server at localhost:${port}/graphql`)
