import './HomeLink.styl'
import React from 'react'
import {Link} from 'react-router'

class HomeLink extends React.Component {
  render () {
    return (
      <Link to='/' className='home-link'>Back</Link>
    )
  }
}

export default HomeLink
