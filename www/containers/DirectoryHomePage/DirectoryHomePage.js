import './DirectoryHomePage.styl'
import React from 'react'
import { Link } from 'react-router'

const DirectoryHomePage = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <nav className='menu'>
        <Link to='/doctors' activeClassName='active'>
          <div className='menu__item menu__item--doctors'>Doctors</div>
        </Link>
        <Link to='/hospitals' activeClassName='active'>
          <div className='menu__item menu__item--hospitals'>Hospitals</div>
        </Link>
        <Link to='/pharmacies' activeClassName='active'>
          <div className='menu__item menu__item--pharmacies'>Pharmacies</div>
        </Link>
        <Link to='/appointment' activeClassName='active'>
          <div className='menu__item menu__item--appointment'>Make An Appointment</div>
        </Link>
      </nav>
    </div>
  )
}

export default DirectoryHomePage
