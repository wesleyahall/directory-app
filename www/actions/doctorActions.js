import CONSTS from '../constants'
import doctors from '../constants/doctors.json'

function setDoctorsData () {
  return {
    type: CONSTS.ACTIONS.SET_DOCTORS_DATA,
    doctors
  }
}

function filterDoctorsBy (filterString) {
  return {
    type: CONSTS.ACTIONS.FILTER_DOCTORS,
    filterString
  }
}

export default { setDoctorsData, filterDoctorsBy }
