export default function (state = '', action) {
  switch (action.type) {
    case 'FILTER_HOSPITALS':
      return action.hospitalFilterString
    case 'RESET_HOSPITAL_FILTER':
      return action.hospitalFilterString
    default:
      return state
  }
}
