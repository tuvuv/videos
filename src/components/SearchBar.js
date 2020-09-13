import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import '../App.css'

const { Search } = Input

class SearchBar extends React.Component {
  state = { input: '' }

  clearInputBar = () => {
    this.setState({input: ''})
  }

  handleChange = e => {
    this.setState({input: e.target.value})
  }

  render = () => (
    <div>
      <Search value={this.state.input} placeholder="Search videos" onChange={e => this.handleChange(e)} onSearch={term => {this.props.onSearchSubmit(term); this.clearInputBar()}} enterButton />
    </div>
  )
}

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func
}
export default SearchBar
