const { ApolloServer, gql } = require('apollo-server-express')
const ProductAPI = require('./datasources/product')

const dataSources = () => ({
  productAPI: new ProductAPI(),
})

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    description: String!
    image: String!
    material: String!
    color: String!
    release_date: String!
    price: String!
  }

  type Query {
    products: [Product!]
    product(productId: ID!): Product!
  }
`

const resolvers = {
  Query: {
    products: (_, __, { dataSources }) => dataSources.productAPI.getProducts(),
    product: (_, { productId }, { dataSources }) =>
      dataSources.productAPI.getProductById(productId),
  },
}

module.exports = new ApolloServer({ typeDefs, dataSources, resolvers })
