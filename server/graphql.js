const { ApolloServer, gql } = require('apollo-server-express')
const ProductAPI = require('./datasources/product')

const dataSources = () => ({
  productAPI: new ProductAPI(),
})

const typeDefs = gql`
  type Product {
    id: ID!
    title: String
    description: String
    image: String
    material: String
    color: String
    release_date: String
    price: String
  }

  type Query {
    products: [Product]
  }
`

const resolvers = {
  Query: {
    products: (_, __, { dataSources }) => dataSources.productAPI.getProducts(),
  },
}

module.exports = new ApolloServer({ typeDefs, dataSources, resolvers })
