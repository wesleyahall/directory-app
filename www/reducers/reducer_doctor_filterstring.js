import CONSTS from '../constants'

export default function (state = '', action) {
  switch (action.type) {
    case CONSTS.FILTER_DOCTORS:
      return action.doctorFilterString
    case CONSTS.RESET_DOCTOR_FILTER:
      return action.doctorFilterString
    default:
      return state
  }
}
