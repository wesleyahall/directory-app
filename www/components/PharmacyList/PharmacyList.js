import React from 'react'
import PharmacyListItem from '../PharmacyListItem'
import './PharmacyList.styl'

class PharmacyList extends React.Component {
  componentDidMount () {
  }

  componentWillUnmount () {
    this.props.resetPharmacyFilter()
  }

  doesMatch (str) {
    return (key) => (key + '').toLowerCase().indexOf(str) !== -1
  }

  filterData () {
    const {pharmacies, pharmacyFilterString} = this.props
    const str = pharmacyFilterString.toLowerCase()
    return str !== ''
      ? pharmacies.filter((r) => Object.values(r).some(this.doesMatch(str)))
      : pharmacies
  }

  handleFilterStringChange (e) {
    this.props.filterPharmaciesBy(e.target.value)
  }

  handlePharmacyClick (pharmacyId) {
    this.props.selectPharmacy(pharmacyId)
  }

  render () {
    const { pharmacyFilterString } = this.props
    const data = this.filterData()
    let results = data.length ? data.length + ' results' : 'No Matches Found'

    return (
      <div className='pharmacy-list'>
        <div className='pharmacy-list__header'>
          <h1 className='page-header--doctors'>Pharmacies</h1>
          <input className='pharmacy-list__header__filter-input' value={pharmacyFilterString}
            onChange={::this.handleFilterStringChange}
            type='text' placeholder='Search By Name or Specialty'
            autoCorrect='off' autoCapitalize='off' spellCheck='false' />
          <h3 className='pharmacy-list__header__results'>{results}</h3>
        </div>
        <ul className='pharmacy-list__list'>
          {
            data.map(function (pharmacy) {
              return <PharmacyListItem key={pharmacy.id} pharmacy={pharmacy} {...this.props} />
            }, this)
          }
        </ul>
      </div>
    )
  }
}

PharmacyList.propTypes = {
  // actions
  filterPharmaciesBy: React.PropTypes.func.isRequired,
  selectPharmacy: React.PropTypes.func.isRequired,
  resetPharmacyFilter: React.PropTypes.func.isRequired,
  // state
  pharmacies: React.PropTypes.array.isRequired,
  pharmacyFilterString: React.PropTypes.string.isRequired
}

export default PharmacyList
