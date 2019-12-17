import { combineReducers } from 'redux'

const user = (state = null) => state

const clients = (state = [], action) => {
    switch(action.type) {
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