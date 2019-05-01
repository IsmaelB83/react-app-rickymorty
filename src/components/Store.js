// Import redux
import { createStore } from 'redux';

const initialState = {
    characters: []  
}

// Actions
export const actions = {
    addChar: (id, name, status, image, species, gender, origin, location) => {
        return {
            type: 'ADD_CHAR',
            payload: {
                id: id,
                name: name,
                status: status,
                created: Date.now(),
                image: image!==''?image:'https://cdn.shopify.com/s/files/1/0191/7850/products/RICKMORTY_39_-_COVER_A_FNL_WEB.jpg?v=1530034748',
                species: species,
                gender: gender,
                origin: origin,
                location: location
            }
        };
    },
    setChars: (characters) => {
        return {
            type: 'SET_CHARS',
            payload: { 
                characters: characters,
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
            newState.loading = false;
            return newState;
        case "SET_CHARS": {
            return {...action.payload};
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