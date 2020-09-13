import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import { Row, Col } from 'antd'
import youtube from '../apis/youtube'

const KEY = 'AIzaSyBCJwmJ8jXTLMfsdvRncYRv_sTGHa7ziz0'

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
    this.onSearchSubmit("hello");
  }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        key: KEY,
        part: 'snippet',
        q: term,
        maxResults: 5
      }
    })
    this.setState({ 
      videos: response.data.items, 
      selectedVideo: response.data.items[0] 
    })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render = () => {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Videos</h1>

        <Row gutter={[0, 30]} type="flex" justify="center" align="center">
          <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        </Row>
        <Row>
          <Col span={12}>
            <VideoDetail video={this.state.selectedVideo}/>
          </Col>
          <Col span={12}>
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
