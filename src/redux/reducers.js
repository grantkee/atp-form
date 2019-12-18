import { combineReducers } from 'redux'

// const user = (state = null) => state

const user = (state = [], action) => {
    //not sure I'm changing the user's login key to the action.value
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
        case 'REMOVE_CLIENT':
            const clients = [ ...state ]
            clients.splice(action.value, 1)
            return clients
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

const makes = (state = [], action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default combineReducers({ user, clients, makes, equipment })