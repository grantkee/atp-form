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
        case 'ADD_CLIENT':
            return [ ...state, action.value ]
        default:
            return state
    }
}

const client = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CLIENT':
            return action.value[0]
        case 'ADD_CLIENT':
            return action.value
        case 'ADD_EQUIP':
            debugger
            return Object.assign({}, state, {
                equipment: action.value
            })
        case 'REMOVE_CLIENT':
            return initialState
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