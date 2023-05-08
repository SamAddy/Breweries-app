import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>This page is not available.</h1>
        You may check out the 
        <Link to="/"> home page</Link>.
    </div>
  )
}

export default NotFound