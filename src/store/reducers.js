import { combineReducers } from 'redux'
import { ADD_LIST, SET_LANG } from './actions';

const listNews = [];

function list (state = listNews, action ) {
  switch (action.type) {
    case ADD_LIST:
      state = action.payload
      return state
    default:
      return state
  }
}

function country (state = 'ua', action) {
  switch (action.type) {
    case SET_LANG:
      state = action.value;
      return state
    default:
      return state
  }
}

const todoApp = combineReducers({
  list,
  country
})

export default todoApp
