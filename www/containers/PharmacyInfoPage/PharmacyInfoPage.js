import React from 'react'
import { connect } from 'react-redux'
import { pharmacyActions as actions } from '../../actions'
import { bindActionCreators } from 'redux'
import PharmacyDetail from '../../components/PharmacyDetail'

class PharmacyInfoPage extends React.Component {
  componentWillMount () {
    this.props.selectPharmacy(this.props.pharmacies[this.props.params.pharmacyId])
  }

  render () {
    let pharmacy = this.props.pharmacies[this.props.params.pharmacyId]
    return (
      <div className='page'>
        <PharmacyDetail pharmacy={pharmacy} />
      </div>
    )
  }
}

PharmacyInfoPage.propTypes = {
  params: React.PropTypes.object.isRequired,
  selectPharmacy: React.PropTypes.func.isRequired,
  pharmacies: React.PropTypes.array.isRequired,
  selectedPharmacy: React.PropTypes.object
}

function mapStateToProps (state) {
  return {
    pharmacies: state.pharmacies,
    selectedPharmacy: state.selectedPharmacy
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PharmacyInfoPage)
