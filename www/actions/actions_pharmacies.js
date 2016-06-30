import CONSTS from '../constants'

function selectPharmacy (pharmacyId) {
  return {
    type: CONSTS.ACTIONS.SELECT_PHARMACY,
    selectedPharmacy: pharmacyId
  }
}

function filterPharmaciesBy (filterString) {
  return {
    type: CONSTS.ACTIONS.FILTER_PHARMACIES,
    pharmacyFilterString: filterString
  }
}

function resetPharmacyFilter () {
  return {
    type: CONSTS.ACTIONS.RESET_PHARMACY_FILTER,
    pharmacyFilterString: ''
  }
}

export default { selectPharmacy, filterPharmaciesBy, resetPharmacyFilter }
