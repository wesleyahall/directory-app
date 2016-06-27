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
    let doctorPractice = doctor.PracticeName === 0 ? '' : 'Practice: ' + doctor.PracticeName
    let doctorSpecialty = 'Specialty: ' + doctor.Specialty

    return (
      <Link className='doctor-list__item' key={doctor.id} to={'doctors/' + doctor.id}>
        <li>
          <div className='doctor-list__item--name'>
            {doctorName}
          </div>

          <div className='doctor-list__item--practice'>
            {doctorPractice}
          </div>

          <div className='doctor-list__item--specialty'>
            {doctorSpecialty}
          </div>

          <div className='doctor-list__item--phone-number'>
            <a href={'telprompt:' + doctor.PhoneNumber} onClick={::this.handlePhoneClick}>
              {doctor.PhoneNumber}
            </a>
          </div>
        </li>
      </Link>
    )
  }
}

DoctorListItem.propTypes = {
  selectDoctor: React.PropTypes.func.isRequired,
  doctor: React.PropTypes.object.isRequired
}

export default DoctorListItem
