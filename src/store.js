import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import votes from './reducers/votes'
import venues from './reducers/venues'

const configureStore = (state, _) => {
  const store = createStore(
    combineReducers({votes, venues}),
    state,
    composeWithDevTools(applyMiddleware(thunk))
  ); 

  return store
}

export default configureStore
