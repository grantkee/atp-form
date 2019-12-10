import { combineReducers } from 'redux';

const clients = (state = [], action ) => {
    switch(action.type) {
        case 'ADD_CLIENT' :
            return [...state, action.value]
    }
}

export default comkbineReducers({clients})