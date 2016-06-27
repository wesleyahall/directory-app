export default function (state = '', action) {
  switch (action.type) {
    case 'SELECT_DOCTOR':
      return action.selectedDoctor
    default:
      return state
  }
}
