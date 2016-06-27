import React from 'react'

class HospitalDetail extends React.Component {
  render () {
    let hospital = this.props.hospital
    return (
      <div className='hospital-detail'>
        <div className='hospital-detail__name'>
          {hospital.Name}
        </div>
      </div>
    )
  }
}

HospitalDetail.propTypes = {
  hospital: React.PropTypes.object.isRequired
}

export default HospitalDetail
