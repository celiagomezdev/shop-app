const { RESTDataSource } = require('apollo-datasource-rest')

class ProductAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://5fd0e692b485ea0016eed9f4.mockapi.io/akira/api/v1/'
  }

  async getProducts() {
    const response = await this.get(`products`)
    return response.items
  }
}

module.exports = ProductAPI