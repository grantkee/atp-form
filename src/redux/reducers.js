import { combineReducers } from 'redux';

//removed action in the parameter and only returning state for now
const clients = (state = null ) => state
// {
//     switch(action.type) {
//         case 'ADD_CLIENT' :
//             return [...state, action.value]
//     }
// }

export default combineReducers({clients})