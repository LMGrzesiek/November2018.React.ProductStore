import { AUTH_STATE_CHANGED } from '../actions'

function userReducer(user = {}, action){
    switch(action.type){
        case AUTH_STATE_CHANGED:
            return action.user;
        default:
            return user;
    }
}

export default userReducer;