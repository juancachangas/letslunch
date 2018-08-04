import React, { Component } from 'react'
import {connect} from 'react-redux'
import { VoteVenuesView } from '../components/votes';
import { addParticipant, setVote } from '../actions/votes';

class VoteVenues extends Component {
  constructor(props){
    super(props)
  }
  addNewParticipant = () =>{
    this.props.newParticipant()
  }
  render () {
    const {venues,participants, sendVote} = this.props
    return (
      <VoteVenuesView
        venues={venues}
        participants={participants}
        addParticipant={this.addNewParticipant}
        sendVote={sendVote}
        />
    )
  }
}
const mapStateToProps = (state) => {
  const venues = state.venues.list
  const {participants} = state.votes
  return {
    venues,
    participants
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    newParticipant: _ => dispatch(addParticipant()),
    sendVote : (participantIndex, venueIndex) => dispatch(setVote(participantIndex, venueIndex))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteVenues)
