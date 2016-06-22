import React from 'react'
import './PharmacyTable.styl'

class PharmacyTable extends React.Component {

  componentDidMount () {
    this.props.setPharmaciesData()
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
    this.props.filterPharmaciesBy(e.target.value)
  }

  render () {
    const { filterString } = this.props
    const data = this.filterData()
    let results = data.length ? data.length + ' results' : 'No Matches Found'

    return (
      <div className='pharmacy-table'>
        <div className='pharmacy-table__header'>
          <h1 className='page-header--pharmacies'>Pharmacies</h1>
          <input className='pharmacy-table__header__filter-input' value={filterString}
            onChange={::this.handleFilterStringChange}
            type='text' placeholder='Search By Name or City'
            autoCorrect='off' autoCapitalize='off' spellCheck='false' />
          <h3 className='pharmacy-table__header__results'>{results}</h3>
        </div>
        <ul className='pharmacy-list'>
          {data.map(function (pharmacy) {
            return (
              <li className='pharmacy-list__item' key={pharmacy.Name}>
                <div className='pharmacy-list__item--name'>{pharmacy.Name}</div>
                <div className='pharmacy-list__item--city'>{pharmacy.City}</div>
                <div className='pharmacy-list__item--phone-number'>
                  <a href={'tel://' + pharmacy.PhoneNumber}>{pharmacy.PhoneNumber}</a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

PharmacyTable.propTypes = {
  // actions
  setPharmaciesData: React.PropTypes.func.isRequired,
  filterPharmaciesBy: React.PropTypes.func.isRequired,
  // state
  data: React.PropTypes.array.isRequired,
  filterString: React.PropTypes.string.isRequired
}

export default PharmacyTable
