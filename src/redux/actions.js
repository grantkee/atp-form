const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
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