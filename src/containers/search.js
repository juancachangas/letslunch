import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getVenues } from '../actions/venues';
import { SearchVenueView } from '../components/search';

class SearchVenues extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: ''
    }
  }
  
  onChange = (event) => {
    this.setState({searchText: event.target.value})
  }
  submit = () =>{
    const geocode =  this.state.searchText
    this.props.getVenuesList(geocode)
  }
  render () {
    return (
      <SearchVenueView
        onChange={this.onChange}
        submit={this.submit}
        value={this.state.searchText}
        />
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getVenuesList: geocode => dispatch(getVenues(geocode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchVenues)
