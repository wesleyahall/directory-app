import CONSTS from '../constants'

function selectDoctor (doctorId) {
  return {
    type: CONSTS.ACTIONS.SELECT_DOCTOR,
    selectedDoctor: doctorId
  }
}

function filterDoctorsBy (filterString) {
  return {
    type: CONSTS.ACTIONS.FILTER_DOCTORS,
    doctorFilterString: filterString
  }
}

function resetDoctorFilter () {
  return {
    type: CONSTS.ACTIONS.RESET_DOCTOR_FILTER,
    doctorFilterString: ''
  }
}

export default { selectDoctor, filterDoctorsBy, resetDoctorFilter }
