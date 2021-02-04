const {
  mockProductsResponse,
  mockProductResponse,
} = require('../utils/test-fixture-data')

const ProductAPI = require('../datasources/product')

const mocks = {
  get: jest.fn(),
}

const productAPI = new ProductAPI()
productAPI.get = mocks.get

describe('ProductAPI.getProducts', () => {
  it('should return products from the api', async () => {
    mocks.get.mockReturnValueOnce(mockProductsResponse)
    const res = await productAPI.getProducts()

    expect(res.products).toEqual(mockProductsResponse.products)
    expect(mocks.get).toBeCalledWith('products')
  })
})

describe('ProductAPI.getProductById', () => {
  it('should find the product with the specified id from the api', async () => {
    mocks.get.mockReturnValueOnce(mockProductResponse)
    const res = await productAPI.getProductById(1)

    expect(res).toEqual(mockProductResponse)
    expect(mocks.get).toBeCalledWith(`products/${1}`)
  })
})
