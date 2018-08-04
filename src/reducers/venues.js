export const initialState = {
  list: []
};
export const VENUES_SET = 'VENUES_SET'

export default (state = initialState, action) =>{
  switch (action.type) {
    case VENUES_SET:
      return {
        list: action.payload.list
      }
    default:
      return state
  }
}