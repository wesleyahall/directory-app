export default function (state = '', action) {
  switch (action.type) {
    case 'SELECT_HOSPITAL':
      return action.selectedHospital
    default:
      return state
  }
}
