import React from 'react'

class PharmacyDetail extends React.Component {
  render () {
    let pharmacy = this.props.pharmacy
    return (
      <div className='pharmacy-detail'>
        <div className='pharmacy-detail__name'>
          {pharmacy.Name}
        </div>
      </div>
    )
  }
}

PharmacyDetail.propTypes = {
  pharmacy: React.PropTypes.object.isRequired
}

export default PharmacyDetail
