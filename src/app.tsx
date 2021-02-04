import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './app.css'
import ProductsPage from './pages/products-page'
import ProductDetailPage from './pages/product-detail-page'

const client = new ApolloClient({
  uri: `http://localhost:4000/graphql`,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <div className="shop-app">
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <ProductsPage />
            </Route>
            <Route path="/products/:productId">
              <ProductDetailPage />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App
