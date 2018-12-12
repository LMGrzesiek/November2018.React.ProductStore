import { combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';

//My store is a collection of reducers 
//if I had a simple app, I could just keep all my reducer functions in this file
const store = combineReducers({
    productsReducer,
    cartReducer,
    userReducer
})

export default store