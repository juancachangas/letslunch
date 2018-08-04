export const initialState = {
  participants: []
};
export const VOTES_PARTICIPANT_ADD = 'VOTES_PARTICIPANT_ADD'
export const VOTES_SET_VOTE = 'VOTES_SET_VOTE'
export default (state = initialState, action) =>{
  const {type, payload} = action
  switch (type) {
    case VOTES_PARTICIPANT_ADD:
      return {
        participants: [
          ...state.participants,
          payload.participant]
      }
    case VOTES_SET_VOTE: {
      const {index, venueIdex} = payload
      return {
        participants: [
          ...state.participants,
          [index]: {
            ...state.participants[index],
            venue: venueIdex
          }
        ]
      }
    }
    default:
      return state
  }
}