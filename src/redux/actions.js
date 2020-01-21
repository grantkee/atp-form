const url = "https://my.api.mockaroo.com/clientdemographics.json?key=a2f2a7f0"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const addClient = ( client ) => {
    return {
        type: 'ADD_CLIENT',
        value: client
    }
}

export const fetchClients = () => {
    return ( dispatch ) => {
        fetch('/clients')
        .then(res => res.json())
        .then(response => {
            const action = {
                type: 'FETCH_CLIENTS',
                value: response
            }
            dispatch(action)
        })
        .catch(error => console.log(error))
    }
}

export const fetchClient = () => {
    return ( dispatch ) => {
        fetch('/clients/:id')
        .then(res => res.json())
        .then(response => {
            const action = {
                type: 'FETCH_CLIENT',
                value: response
            }
            dispatch(action)
        })
        .catch(error => console.log(error))
    }
}

export const removeClient = (index) => {
    return {
        type: 'REMOVE_CLIENT',
        value: index
    }
}

export const login = () => {
    return {
        type: 'LOGIN',
        value: true
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        value: false
    }
}