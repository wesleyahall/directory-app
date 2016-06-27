import './DoctorInfoPage.styl'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doctorActions as actions } from '../../actions'
import { bindActionCreators } from 'redux'
import DoctorDetail from '../../components/DoctorDetail'

class DoctorInfoPage extends Component {
  componentWillMount () {
    this.props.selectDoctor(this.props.doctors[this.props.params.doctorId])
  }

  render () {
    let doctor = this.props.doctors[this.props.params.doctorId]
    return (
      <div className='page'>
        <DoctorDetail doctor={doctor} />
      </div>
    )
  }
}

DoctorInfoPage.propTypes = {
  params: React.PropTypes.object.isRequired,
  selectDoctor: React.PropTypes.func.isRequired,
  doctors: React.PropTypes.array.isRequired,
  selectedDoctor: React.PropTypes.object
}

function mapStateToProps (state) {
  return {
    doctors: state.doctors,
    selectedDoctor: state.selectedDoctor
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DoctorInfoPage)
