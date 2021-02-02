import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './app.css'
import ProductsPage from './pages/products-page'

const client = new ApolloClient({
  uri: `http://localhost:4000/graphql`,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <div className="shop-app">
      <ApolloProvider client={client}>
        <ProductsPage />
      </ApolloProvider>
    </div>
  )
}

export default App
