import './FooterNav.styl'
import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <footer>
      <nav className='footer-nav'>
        <Link to='/' className='footer-nav__link' activeClassName='footer-nav__link--active'>
          <div className='footer-nav__link__item footer-nav__link__item--directory'>
            Directory
          </div>
        </Link>
        <Link to='/appointment' className='footer-nav__link' activeClassName='footer-nav__link--active'>
          <div className='footer-nav__link__item footer-nav__link__item--appointment'>
            Appointments
          </div>
        </Link>
      </nav>
    </footer>
  )
}
