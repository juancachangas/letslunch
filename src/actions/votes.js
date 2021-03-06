
import { VOTES_SET_VOTE, VOTES_PARTICIPANT_ADD } from "../reducers/votes"

export const setVote = (index, venueIndex) => {
  return {
    type: VOTES_SET_VOTE,
    payload: {
      index,
      venueIndex
    }
  }
}

export const addParticipant = (_) => {
  return {
    type: VOTES_PARTICIPANT_ADD,
    payload: {
      participant: {
        venueIndex: undefined
      }
    }
  }
}