export const ADD_LIST = 'ADD_LIST';

export function addList (list) {
    return {
        type: ADD_LIST,
        payload: list
    }
}