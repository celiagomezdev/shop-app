export interface Item {
  title: string
  description: string
  image: string
  price: string
}

export interface InitialState {
  items: Item[]
}

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'

export interface AddItemToCartAction {
  type: typeof ADD_ITEM_TO_CART
  payload: Item
}

export type CartActionTypes = AddItemToCartAction
