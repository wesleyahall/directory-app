import React, { Component } from 'react'
import HospitalListItem from '../HospitalListItem'
import './HospitalList.styl'

class HospitalList extends Component {
  componentDidMount () {
  }

  componentWillUnmount () {
    this.props.resetHospitalFilter()
  }

  doesMatch (str) {
    return (key) => (key + '').toLowerCase().indexOf(str) !== -1
  }

  filterData () {
    const {hospitals, hospitalFilterString} = this.props
    const str = hospitalFilterString.toLowerCase()
    return str !== ''
      ? hospitals.filter((r) => Object.values(r).some(this.doesMatch(str)))
      : hospitals
  }

  handleFilterStringChange (e) {
    this.props.filterHospitalsBy(e.target.value)
  }

  handleHospitalClick (hospitalId) {
    this.props.selectHospital(hospitalId)
  }

  render () {
    const { hospitalFilterString } = this.props
    const data = this.filterData()
    let results = data.length ? data.length + ' results' : 'No Matches Found'

    return (
      <div className='hospital-list'>
        <div className='hospital-list__header'>
          <h1 className='page-header--doctors'>Hospitals</h1>
          <input className='hospital-list__header__filter-input' value={hospitalFilterString}
            onChange={::this.handleFilterStringChange}
            type='text' placeholder='Search By Name or Specialty'
            autoCorrect='off' autoCapitalize='off' spellCheck='false' />
          <h3 className='hospital-list__header__results'>{results}</h3>
        </div>
        <ul className='hospital-list__list'>
          {
            data.map(function (hospital) {
              return <HospitalListItem key={hospital.id} hospital={hospital} {...this.props} />
            }, this)
          }
        </ul>
      </div>
    )
  }
}

HospitalList.propTypes = {
  // actions
  filterHospitalsBy: React.PropTypes.func.isRequired,
  selectHospital: React.PropTypes.func.isRequired,
  resetHospitalFilter: React.PropTypes.func.isRequired,
  // state
  hospitals: React.PropTypes.array.isRequired,
  hospitalFilterString: React.PropTypes.string.isRequired
}

export default HospitalList
