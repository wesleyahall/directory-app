import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hospitalActions as actions } from '../../actions'
import { bindActionCreators } from 'redux'
import HospitalDetail from '../../components/HospitalDetail'

class HospitalInfoPage extends Component {
  componentWillMount () {
    this.props.selectHospital(this.props.hospitals[this.props.params.hospitalId])
  }

  render () {
    let hospital = this.props.hospitals[this.props.params.hospitalId]
    return (
      <div className='page'>
        <HospitalDetail hospital={hospital} />
      </div>
    )
  }
}

HospitalInfoPage.propTypes = {
  params: React.PropTypes.object.isRequired,
  selectHospital: React.PropTypes.func.isRequired,
  hospitals: React.PropTypes.array.isRequired,
  selectedHospital: React.PropTypes.object
}

function mapStateToProps (state) {
  return {
    hospitals: state.hospitals,
    selectedHospital: state.selectedHospital
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(HospitalInfoPage)
