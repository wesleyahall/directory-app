import React, { Component } from 'react'
import DoctorListItem from '../DoctorListItem'

import './DoctorList.styl'

class DoctorList extends Component {
  componentDidMount () {
  }

  componentWillUnmount () {
    this.props.resetDoctorFilter()
  }

  doesMatch (str) {
    return (key) => (key + '').toLowerCase().indexOf(str) !== -1
  }

  filterData () {
    const {doctors, doctorFilterString} = this.props
    const str = doctorFilterString.toLowerCase()
    return str !== ''
      ? doctors.filter((r) => Object.values(r).some(this.doesMatch(str)))
      : doctors
  }

  handleFilterStringChange (e) {
    this.props.filterDoctorsBy(e.target.value)
  }

  handleDoctorClick (doctorId) {
    this.props.selectDoctor(doctorId)
  }

  render () {
    const { doctorFilterString } = this.props
    const data = this.filterData()

    let results = data.length ? data.length + ' results' : 'No Matches Found'

    return (
      <div className='doctor-list'>
        <div className='doctor-list__header'>
          <h1 className='page-header--doctors'>Doctors</h1>
          <input className='doctor-list__header__filter-input' value={doctorFilterString}
            onChange={::this.handleFilterStringChange}
            type='text' placeholder='Search By Name or Specialty'
            autoCorrect='off' autoCapitalize='off' spellCheck='false' />
          <h3 className='doctor-list__header__results'>{results}</h3>
        </div>
        <ul className='doctor-list'>
          {
            data.map(function (doctor) {
              return <DoctorListItem key={doctor.id} doctor={doctor} {...this.props} />
            }, this)
          }
        </ul>
      </div>
    )
  }
}

DoctorList.propTypes = {
  // actions
  filterDoctorsBy: React.PropTypes.func.isRequired,
  selectDoctor: React.PropTypes.func.isRequired,
  resetDoctorFilter: React.PropTypes.func.isRequired,
  // state
  doctors: React.PropTypes.array.isRequired,
  doctorFilterString: React.PropTypes.string.isRequired
}

export default DoctorList
