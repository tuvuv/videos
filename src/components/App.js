import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import { Row, Col } from 'antd'
import { fetchVideos, fetchVideo } from '../actions'

class App extends React.Component {
  componentDidMount = () => {
    this.onSearchSubmit('hello')
  }

  onSearchSubmit = async term => {
    await this.props.fetchVideos(term)
    const firstVideo = this.props.videos[0]
    this.props.fetchVideo(firstVideo)
  }

  onVideoSelect = video => {
    this.props.fetchVideo(video)
  }

  render () {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Videos</h1>
        <Row gutter={[0, 30]} type="flex" justify="center" align="center">
          <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        </Row>
        <Row>
          <Col span={12}>
            <VideoDetail video={this.props.selectedVideo}/>
          </Col>
          <Col span={12}>
            <VideoList videos={this.props.videos} onVideoSelect={this.onVideoSelect}/>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos,
    selectedVideo: state.selectedVideo
  }
}

App.propTypes = {
  fetchVideos: PropTypes.func,
  fetchVideo: PropTypes.func,
  selectedVideo: PropTypes.object,
  videos: PropTypes.array
}

export default connect(mapStateToProps, { fetchVideos, fetchVideo })(App)
