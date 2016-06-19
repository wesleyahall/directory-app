import React from 'react'
import { connect } from 'react-redux'
import { doctorActions as actions } from '../../actions'
import { bindActionCreators } from 'redux'
import DoctorTable from '../../components/DoctorTable'

const DoctorSearchPage = (props) => {
  return (
    <div>
      <DoctorTable {...props} />
    </div>
  )
}

const mapStateToProps = ({doctors}) => doctors
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DoctorSearchPage)
