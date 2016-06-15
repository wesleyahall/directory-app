import './DirectoryHomePage.styl'
import React from 'react'
import { Link } from 'react-router'

const DirectoryHomePage = (props) => {
  return (
    <div>
      <h1>I want to find a</h1>
      <nav className='menu'>
        <Link to='/doctors' className='menu__link' activeClassName='menu__link--active'>
          <div className='menu__link__item menu__link__item--doctors'>Doctor</div>
        </Link>
        <Link to='/hospitals' className='menu__link' activeClassName='menu__link--active'>
          <div className='menu__link__item menu__link__item--hospitals'>Hospital</div>
        </Link>
        <Link to='/pharmacies' className='menu__link' activeClassName='menu__link--active'>
          <div className='menu__link__item menu__link__item--pharmacies'>Pharmacy</div>
        </Link>
      </nav>
    </div>
  )
}

export default DirectoryHomePage
