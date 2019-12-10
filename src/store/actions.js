export const ADD_LIST = 'ADD_LIST';

export function addList (list) {
    return {
        type: ADD_LIST,
        payload: list
    }
}

export const setList = (url, dispatch) => {
    return fetch(`${url}&apiKey=d38891e5f6fc4ec2885615900859eb4a`)
        .then(data => {
            return data.json()
        })
        .then(result => {
            dispatch(addList(result.articles))
        })
        .catch(error => console.log(error))
}