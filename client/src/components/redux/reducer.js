import {
    ADD_FAV,
    ADD_CHARACTER,
    REMOVE_FAV,
    REMOVED_CHARACTER,
    FILTER,
    ORDER
} from './actions';

const initialState = {
    myFavorites: [],
    allCharacters: [],
    filteredCharacters: []
}

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                // allCharacters: payload
            };

        case ADD_CHARACTER:
            return {
                ...state,                 
                allCharacters: [...state.allCharacters, payload],
                filteredCharacters: [...state.allCharacters, payload],
            };

        case REMOVED_CHARACTER:
            return {
                ...state,
                allCharacters: state.allCharacters.filter((char) => char.id !== payload),
            };

        // case REMOVE_FAV:
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
        //     };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload
            };
    
        case FILTER:
            // const filteredCharacters = state.allCharacters.filter((char) => char.gender === action.payload);
            return {
                ...state,
                filteredCharacters: payload !== 'All' ? state.allCharacters.filter((char)=>char.gender === payload) : state.allCharacters 
             };

        case ORDER:
            const orderCharacters = state.filteredCharacters.slice().sort((a, b) => {
                if(payload === "A") {
                    return a.id - b.id;
                } else {
                    return b.id - a.id
                }

            });
            return {
                ...state,
                filteredCharacters: orderCharacters,
            };

        default:
            return {...state};
    }
};

export default rootReducer;
