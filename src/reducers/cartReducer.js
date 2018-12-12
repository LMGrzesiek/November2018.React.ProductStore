import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

function cartReducer(cart = [], action){
    switch(action.type){
        case ADD_TO_CART: {
            console.log(action.type);
            return cart.concat([action.product])
        }
        case REMOVE_FROM_CART: {
            let productIndex = cart.map(e => e.ID).indexOf(action.product.id);
            let tempCart = cart.slice();
            tempCart.splice(productIndex, 1);
            return tempCart;
        }
        default:
            return cart;
    }
}

export default cartReducer;