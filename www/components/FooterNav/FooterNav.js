import './FooterNav.styl'
import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <footer>
      <nav className='footer-nav'>
        <Link to='/' className='footer-nav__link' activeClassName='footer-nav__link--active'>
          <div className='footer-nav__link__item footer-nav__link__item--directory'>
            <i className='fa fa-book' aria-hidden='true'></i>
            Directory
          </div>
        </Link>
        <Link to='/appointment' className='footer-nav__link' activeClassName='footer-nav__link--active'>
          <div className='footer-nav__link__item footer-nav__link__item--appointment'>
            <i className='fa fa-calendar-plus-o' aria-hidden='true'></i>
            Appointments
          </div>
        </Link>
      </nav>
    </footer>
  )
}
