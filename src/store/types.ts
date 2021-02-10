import { Product } from '../__generated__/types'

export interface InitialState {
  items: Product[]
}

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'

export interface AddItemToCartAction {
  type: typeof ADD_ITEM_TO_CART
  payload: Product
}

export type CartActionTypes = AddItemToCartAction
