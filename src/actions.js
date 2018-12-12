/*
 * action types
 */
export const ADD_PRODUCTS = 'ADD_PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED'

export function addProducts(products) {
  return { type: ADD_PRODUCTS, products }
}

export function addToCart(product){
    return { type: ADD_TO_CART, product }
}

export function removeFromCart(product){
    return { type: REMOVE_FROM_CART, product }
}

export function authStateChanged(user){
    return { type: AUTH_STATE_CHANGED, user }
}


