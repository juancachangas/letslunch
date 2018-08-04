import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import SearchVenues from './containers/search'
import VoteVenues from './containers/votes'
import './App.css'

class App extends Component {
  render() {
    const store = configureStore({venues: {list: []}, votes: {participants: []}})
    return (
      <Provider store={store}><div>
        
        <SearchVenues />
        <VoteVenues participants={[]}/>
      </div>
      </Provider>
    );
  }
}

export default App;
