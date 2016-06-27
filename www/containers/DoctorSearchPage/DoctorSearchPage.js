import React from 'react'
import { connect } from 'react-redux'
import { doctorActions as actions } from '../../actions'
import { bindActionCreators } from 'redux'
import DoctorList from '../../components/DoctorList'

const DoctorSearchPage = (props) => {
  return (
    <div>
      <DoctorList {...props} />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    doctors: state.doctors,
    doctorFilterString: state.doctorFilterString
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DoctorSearchPage)
