export default function (state = '', action) {
  switch (action.type) {
    case 'FILTER_PHARMACIES':
      return action.pharmacyFilterString
    case 'RESET_PHARMACY_FILTER':
      return action.pharmacyFilterString
    default:
      return state
  }
}
