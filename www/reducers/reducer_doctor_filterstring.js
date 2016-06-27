export default function (state = '', action) {
  switch (action.type) {
    case 'FILTER_DOCTORS':
      return action.doctorFilterString
    case 'RESET_DOCTOR_FILTER':
      return action.doctorFilterString
    default:
      return state
  }
}
