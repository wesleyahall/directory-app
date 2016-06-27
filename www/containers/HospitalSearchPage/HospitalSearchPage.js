import React from 'react'
import { connect } from 'react-redux'
import { hospitalActions as actions } from '../../actions'
import { bindActionCreators } from 'redux'
import HospitalList from '../../components/HospitalList'

const HospitalSearchPage = (props) => {
  return (
    <div>
      <HospitalList {...props} />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    hospitals: state.hospitals,
    hospitalFilterString: state.hospitalFilterString
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(HospitalSearchPage)
