// Redux
import { createStore } from 'redux';

const initialState = {
    characters: []
    
}
// Actions
export const actions = {
    addChar: (name, state, gender, chapters) => {
        return {
            type: 'ADD_CHAR',
            payload: {
                name: name,
                state: state,
                gender: gender,
                chapters: chapters
            }
        };
    },
    setChars: (characters, next, prev, page, pages) => {
        return {
            type: 'SET_CHARS',
            payload: { 
                characters: characters,
                next: next,
                prev: prev,
                page: page,
                pages: pages
            }
        }
    },
    incr: () => { 
        return { 
            type: 'INCR' 
        }
    },
    decr: () => { 
        return { 
            type: 'DECR' 
        }
    }
}

// Reducers: definen como cambia el estado para cada acción: estado + acción ==> acción
function charReducer(state = {}, action) {
    switch (action.type) {
        case "ADD_CHAR":
            let newState = {...state};
            let ch = { 
                ...action.payload, 
                id: newState.characters.length + 1 
            }
            newState.characters.push(ch);
            return newState;
        case "SET_CHARS": {
                let newState = { ...action.payload };
            newState.loading = false;
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