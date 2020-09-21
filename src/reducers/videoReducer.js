export const videoReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_VIDEO':
      return action.payload
    default:
      return state
  }
}
