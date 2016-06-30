import CONSTS from '../constants'

export default function (state = '', action) {
  switch (action.type) {
    case CONSTS.SELECT_HOSPITAL:
      return action.selectedHospital
    default:
      return state
  }
}
