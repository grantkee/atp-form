//note to grant: read documentation on crypto and learn why this was included in the redux_thunk class example but never used
import { generateKeyPairSync } from 'crypto';

export const addClient = ( client ) => {
    return {
        type: 'ADD_CLIENT',
        value: client
    }
}