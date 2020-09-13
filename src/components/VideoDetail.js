import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

const VideoDetail = ({ video }) => {
  if (!video) { // If video not found
    return <div>Loading ...</div>
  }

  return (
    <div>
      <div>
        <iframe src={`https://youtube.com/embed/${video.id.videoId}`} style={{ width: 700, height: 500 }}></iframe>
      </div>
      <Card style={{ width: 700, borderWidth: 'thick' }}>
        <h3>{video.snippet.title}</h3>
      </Card>
    </div>
  )
}

VideoDetail.propTypes = {
  video: PropTypes.object
}

export default VideoDetail
