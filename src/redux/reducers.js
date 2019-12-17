import { combineReducers } from 'redux';

//removed action in the parameter and only returning state for now
const clients = (state = [], action ) => {
    switch(action.type) {
        case 'ADD_USER':
            return [...state, action.value]
        default:
            return state
    }
}
// {
//     switch(action.type) {
//         case 'ADD_CLIENT' :
//             return [...state, action.value]
//     }
// }

export default combineReducers({clients})