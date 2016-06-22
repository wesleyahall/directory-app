import React from 'react'
import { connect } from 'react-redux'
import { pharmacyActions as actions } from '../../actions'
import { bindActionCreators } from 'redux'
import PharmacyTable from '../../components/PharmacyTable'

const PharmacySearchPage = (props) => {
  return (
    <div>
      <PharmacyTable {...props} />
    </div>
  )
}

const mapStateToProps = ({pharmacies}) => pharmacies
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PharmacySearchPage)
