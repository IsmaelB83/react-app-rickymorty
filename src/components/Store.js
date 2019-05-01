// Import redux
import { createStore } from 'redux';

const initialState = {
    loading: true,
    characters: []  
}

// Actions
export const actions = {
    addChar: (key, name, status, image, species, gender, origin, last) => {
        return {
            type: 'ADD_CHAR',
            payload: {
                key: key,
                id: key,
                name: name,
                status: status,
                created: Date.now(),
                image: image!==''?image:'https://cdn.shopify.com/s/files/1/0191/7850/products/RICKMORTY_39_-_COVER_A_FNL_WEB.jpg?v=1530034748',
                species: species,
                gender: gender,
                origin: origin,
                last: last
            }
        };
    },
    setChars: (characters) => {
        return {
            type: 'SET_CHARS',
            payload: { 
                characters: characters,
                loading: false

            }
        }
    },
}

// Reducers: definen como cambia el estado para cada acción: estado + acción ==> acción
function charReducer(state, action) {
    switch (action.type) {
        case "ADD_CHAR":
            let newState = {...state};
            newState.characters.push({ ...action.payload });
            return newState;
        case "SET_CHARS": {
            let newState = { ...action.payload };
            return newState;
        }
        default:
            return state;
    }
}

// Store
export const store = createStore(charReducer, initialState);

// Debug 
window.store = store;
window.actions = actions;