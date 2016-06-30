import CONSTS from '../constants'

export default function (state = '', action) {
  switch (action.type) {
    case CONSTS.SELECT_DOCTOR:
      return action.selectedDoctor
    default:
      return state
  }
}
