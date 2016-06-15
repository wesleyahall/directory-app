import './DirectoryHomePage.styl'
import React from 'react'
import { Link } from 'react-router'

const DirectoryHomePage = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to='/doctors' activeClassName='active'>
          <div className='nav__item nav__item--doctors'>Doctors</div>
        </Link>
        <Link to='/hospitals' activeClassName='active'>
          <div className='nav__item nav__item--hospitals'>Hospitals</div>
        </Link>
        <Link to='/pharmacies' activeClassName='active'>
          <div className='nav__item nav__item--pharmacies'>Pharmacies</div>
        </Link>
        <Link to='/appointment' activeClassName='active'>
          <div className='nav__item nav__item--appointment'>Make An Appointment</div>
        </Link>
      </nav>
    </div>
  )
}

export default DirectoryHomePage
