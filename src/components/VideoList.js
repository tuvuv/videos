import React from 'react'
import VideoItem from './VideoItem.js'
import PropTypes from 'prop-types'

function VideoList ({ videos, onVideoSelect }) {
  const renderVideoList = videos.map((video, index) => <VideoItem onVideoSelect={onVideoSelect} key={index} video={video} />)

  return (
    <div>
      {renderVideoList}
    </div>
  )
}

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func
}

export default VideoList
