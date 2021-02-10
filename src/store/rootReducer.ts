import { InitialState, CartActionTypes, ADD_ITEM_TO_CART } from './types'

const initialState: InitialState = {
  items: [],
}

export default function rootReducer(
  state = initialState,
  action: CartActionTypes
): InitialState {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        items: [...state.items, action.payload],
      }
    default:
      return state
  }
}
