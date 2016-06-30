import React from 'react'
import {Link} from 'react-router'
import './PharmacyListItem.styl'

class PharmacyListItem extends React.Component {

  handlePhoneClick (e) {
    e.stopPropagation()
    window.location = e.target.href
  }

  render () {
    const { pharmacy } = this.props
    return (
      <Link
        className='pharmacy-list__list__item'
        key={pharmacy.id}
        to={'pharmacies/' + pharmacy.id}
      >
        <li>
          <div className='pharmacy-list__list__item--name'>
            {pharmacy.Name}
          </div>
        </li>
      </Link>
    )
  }
}

PharmacyListItem.propTypes = {
  selectPharmacy: React.PropTypes.func.isRequired,
  pharmacy: React.PropTypes.object.isRequired
}

export default PharmacyListItem
