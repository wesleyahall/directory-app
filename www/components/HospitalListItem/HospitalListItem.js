import React, {Component} from 'react'
import {Link} from 'react-router'
import './HospitalListItem.styl'

class HospitalListItem extends Component {

  handlePhoneClick (e) {
    e.stopPropagation()
    window.location = e.target.href
  }

  render () {
    const { hospital } = this.props
    return (
      <Link
        className='hospital-list__item'
        key={hospital.id}
        to={'hospitals/' + hospital.id}
      >
        <li>
          <div className='hospital-list__item--name'>
            {hospital.Name}
          </div>
        </li>
      </Link>
    )
  }
}

HospitalListItem.propTypes = {
  selectHospital: React.PropTypes.func.isRequired,
  hospital: React.PropTypes.object.isRequired
}

export default HospitalListItem
