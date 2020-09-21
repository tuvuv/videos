import youtube from '../apis/youtube'

const KEY = 'AIzaSyBCJwmJ8jXTLMfsdvRncYRv_sTGHa7ziz0'

export const fetchVideos = term => async dispatch => {
  const response = await youtube.get('/search', {
    params: {
      key: KEY,
      part: 'snippet',
      q: term,
      maxResults: 5
    }
  })

  dispatch({ type: 'FETCH_VIDEOS', payload: response.data.items })
}

export const fetchVideo = video => {
  return {
    type: 'FETCH_VIDEO',
    payload: video
  }
}
