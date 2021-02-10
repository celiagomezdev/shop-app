import { CartActionTypes, ADD_ITEM_TO_CART } from './types'
import { Product } from '../__generated__/types'

export function addItemToCart(newItem: Product): CartActionTypes {
  return {
    type: ADD_ITEM_TO_CART,
    payload: newItem,
  }
}
