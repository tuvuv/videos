import { combineReducers } from 'redux'
import { videosReducer } from './videosReducer'
import { videoReducer } from './videoReducer'

export default combineReducers({
  videos: videosReducer,
  selectedVideo: videoReducer
})
