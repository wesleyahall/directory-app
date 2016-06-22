import React from 'react'
import './DoctorTable.styl'

class DoctorTable extends React.Component {

  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
    this.props.setDoctorsData()
  }

  doesMatch (str) {
    return (key) => (key + '').toLowerCase().indexOf(str) !== -1
  }

  filterData () {
    const {data, filterString} = this.props
    const str = filterString.toLowerCase()
    return str !== ''
      ? data.filter((r) => Object.values(r).some(this.doesMatch(str)))
      : data
  }

  handleFilterStringChange (e) {
    e.preventDefault()
    this.props.filterDoctorsBy(e.target.value)
  }

  render () {
    const { filterString } = this.props
    const data = this.filterData()
    let results = data.length ? data.length + ' results' : 'No Matches Found'

    return (
      <div className='doctor-table'>
        <div className='doctor-table__header'>
          <h1 className='page-header--doctors'>Doctors</h1>
          <input className='doctor-table__header__filter-input' value={filterString}
            onChange={::this.handleFilterStringChange}
            type='text' placeholder='Search By Name or Specialty'
            autoCorrect='off' autoCapitalize='off' spellCheck='false' />
          <h3 className='doctor-table__header__results'>{results}</h3>
        </div>
        <ul className='doctor-list'>
          {data.map(function (doctor) {
            return (
              <li className='doctor-list__item' key={doctor.id}>
                <div className='doctor-list__item--name'>
                  {doctor.Name}
                </div>
                <div className='doctor-list__item--practice'>
                  Practice: {doctor.PracticeName}
                </div>
                <div className='doctor-list__item--specialty'>
                  Specialty: {doctor.Specialty}
                </div>
                <div className='doctor-list__item--phone-number'>
                  <a href={'tel: ' + doctor.PhoneNumber}>{doctor.PhoneNumber}</a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

DoctorTable.propTypes = {
  // actions
  setDoctorsData: React.PropTypes.func.isRequired,
  filterDoctorsBy: React.PropTypes.func.isRequired,
  // state
  data: React.PropTypes.array.isRequired,
  filterString: React.PropTypes.string.isRequired
}

export default DoctorTable
