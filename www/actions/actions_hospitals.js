import CONSTS from '../constants'

function selectHospital (hospitalId) {
  return {
    type: CONSTS.ACTIONS.SELECT_HOSPITAL,
    selectedHospital: hospitalId
  }
}

function filterHospitalsBy (filterString) {
  return {
    type: CONSTS.ACTIONS.FILTER_HOSPITALS,
    hospitalFilterString: filterString
  }
}

function resetHospitalFilter () {
  return {
    type: CONSTS.ACTIONS.RESET_HOSPITAL_FILTER,
    hospitalFilterString: ''
  }
}

export default { selectHospital, filterHospitalsBy, resetHospitalFilter }
