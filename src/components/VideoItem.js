import React from 'react'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'

const VideoItem = ({ onVideoSelect, video }) => {
  return (
    <div onClick={() => onVideoSelect(video)}>
      <Row gutter={[0, 10]}>
        <Col span={11}>
          <img src={video.snippet.thumbnails.medium.url}/>
        </Col>
        <Col span={13}>
          <h3>{video.snippet.title}</h3>
        </Col>
      </Row>
    </div>
  )
}

VideoItem.propTypes = {
  onVideoSelect: PropTypes.func,
  video: PropTypes.object
}

export default VideoItem
