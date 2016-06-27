import React from 'react'

class DoctorDetail extends React.Component {
  render () {
    let doctor = this.props.doctor
    return (
      <div className='doctor-detail'>
        <div className='doctor-detail__name'>
          {doctor.FirstName} {doctor.LastName}
        </div>
        <div className='doctor-detail__phone-number'>
          {doctor.PhoneNumber}
        </div>
        <div className='doctor-detail__fax-number'>
          {doctor.FaxNumber}
        </div>
        <div className='doctor-detail__specialty'>
          {doctor.Specialty}
        </div>
        <div className='doctor-detail__address'>
          {doctor.Address}<br />
          {doctor.City}, {doctor.State} {doctor.Zip}
        </div>
      </div>
    )
  }
}

DoctorDetail.propTypes = {
  doctor: React.PropTypes.object.isRequired
}

export default DoctorDetail
