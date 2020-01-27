import { combineReducers } from 'redux';
import initialState from './state';

// const user = (state = null) => state

const user = (state = [], action) => {
    switch(action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                login: action.value
            })
        case 'LOGOUT':
            return Object.assign({}, state, {
                login: action.value
            })
        default:
            return state
    }
}

const clients = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_CLIENTS':
            return action.value
        // case 'FETCH_CLIENT':
        //     return action.value
        case 'ADD_CLIENT':
            debugger
            return [ ...state, action.value ]
        case 'REMOVE_CLIENT':
            clients.splice(action.value, 1)
            return clients
        default:
            return state
    }
}

const client = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_CLIENT':
            return [ action.value[0] ]
        case 'ADD_CLIENT':
            debugger
            return [ action.value ]
        default:
            return state
    }
}

const equipment = (state = [], action) => {
    switch(action.type) {
        default:
            return state
    }
}

const atp = ( state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default combineReducers({ user, clients, client, equipment, atp })