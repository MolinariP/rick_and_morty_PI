import axios from 'axios';

export const ADD_FAV = "ADD_FAV";
export const ADD_CHARACTER = "ADD_CHARACTER"
export const REMOVED_CHARACTER = 'REMOVED_CHARACTER';
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export function addFav (character) {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            let response = await axios.post(endpoint, character);
            return dispatch({
                type: ADD_FAV,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export function addChar (char) {
    return {
        type: ADD_CHARACTER,
        payload: char
    };
};

export function removedChar (id) {
    return {
        type: REMOVED_CHARACTER,
        payload: id
    };
};

export function removeFav (id) {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            let response = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: response.data
            });
        
        } catch (error) {
            console.log(error);
        }
    };
};

export function filterCards (gender) {
    return {
        type: FILTER,
        payload: gender
    };
};

export function orderCards (order) {
    return {
        type: ORDER,
        payload: order
    };
};