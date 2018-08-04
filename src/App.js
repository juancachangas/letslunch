import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import SearchVenues from './containers/search'

class App extends Component {
  render() {
    const store = configureStore({venues: {list: []}, votes: {participants: []}})
    return (
      <Provider store={store}>
        <SearchVenues />
      </Provider>
    );
  }
}

export default App;
