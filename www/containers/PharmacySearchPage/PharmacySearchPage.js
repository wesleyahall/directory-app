import React from 'react'
import { connect } from 'react-redux'
import { pharmacyActions as actions } from '../../actions'
import { bindActionCreators } from 'redux'
import PharmacyList from '../../components/PharmacyList'

class PharmacySearchPage extends React.Component {
  render () {
    return (
      <div>
        <PharmacyList {...this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    pharmacies: state.pharmacies,
    pharmacyFilterString: state.pharmacyFilterString
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PharmacySearchPage)
