import { ADD_TO_CART, REMOVE_FROM_CART, AUTH_STATE_CHANGED } from '../actions'


function cartReducer(cart = [], action){
    switch(action.type){
        case AUTH_STATE_CHANGED: {
            let loadedCart = [];
            let userId = window.firebase.auth().O;
            if((userId) && (userId.length > 0)){
                let ref = 'cart/' + userId;
                window.firebase.database().ref(ref).on('value', (snapshot) =>{
                     loadedCart = snapshot.val() || [];
                });
            }
            return loadedCart;
        }

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