import React, {Component} from 'react'
import {Link} from 'react-router'
import './DoctorListItem.styl'

class DoctorListItem extends Component {

  handlePhoneClick (e) {
    e.stopPropagation()
    window.location = e.target.href
  }

  render () {
    const { doctor } = this.props
    let doctorName = doctor.FirstName + ' ' + doctor.LastName

    return (
      <div className='doctor-list__list__item'>
        <li>
          <div className='doctor-list__list__item--name'>
            {doctorName}
          </div>

          <div className='doctor-list__list__item--specialty'>
            {doctor.Specialty}
          </div>

          <div className='doctor-list__list__item--practice'>
            {doctor.PracticeName}
          </div>

          <div className='doctor-list__list__item--phone-number'>
            {doctor.PhoneNumber}
          </div>
        </li>
        <div>
          <ul className='doctor-list__list__item__links'>
            <li>
              <div>
                <a
                  className='doctor-list__list__item__btn doctor-list__list__item__btn--call'
                  href={'telprompt://' + doctor.PhoneNumber}>
                  Call
                </a>
              </div>
            </li>
            <li>
              <div>
                <Link
                  className='doctor-list__list__item__btn doctor-list__list__item__btn--more-info'
                  key={doctor.id}
                  to={'doctors/' + doctor.id}
                  activeClassName='doctor-list__list__item__btn--active'>
                  More Info
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

DoctorListItem.propTypes = {
  selectDoctor: React.PropTypes.func.isRequired,
  doctor: React.PropTypes.object.isRequired
}

export default DoctorListItem
