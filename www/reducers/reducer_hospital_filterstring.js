import CONSTS from '../constants'

export default function (state = '', action) {
  switch (action.type) {
    case CONSTS.FILTER_HOSPITALS:
      return action.hospitalFilterString
    case CONSTS.RESET_HOSPITAL_FILTER:
      return action.hospitalFilterString
    default:
      return state
  }
}
