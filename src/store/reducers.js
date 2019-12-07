import { combineReducers } from 'redux'
import { ADD_LIST } from './actions';

const listNews = []
function list (state = listNews, action ) {
  switch (action.type) {
    case ADD_LIST:
      state = action.payload
      return state
    default:
      return state
  }
}

const todoApp = combineReducers({
  list
})

export default todoApp
