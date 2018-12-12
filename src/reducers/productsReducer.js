import { ADD_PRODUCTS } from '../actions'

function productsReducer(products = [], action){
    switch(action.type){
        case ADD_PRODUCTS: {
            return products.concat(action.products);
        }
        default:
            return products;;
    }
}

export default productsReducer;