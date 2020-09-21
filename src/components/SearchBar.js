import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import '../App.css'

const { Search } = Input

const SearchBar = () => {
  const [input, setInput] = useState('')

  const clearInputBar = () => {
    setInput('')
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <div>
      <Search value={input} placeholder="Search videos" onChange={e => this.handleChange(e)} onSearch={term => { this.props.onSearchSubmit(term); this.clearInputBar() }} enterButton />
    </div>
  )
}

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func
}

export default SearchBar
