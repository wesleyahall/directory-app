import CONSTS from '../constants'
import pharmacies from '../constants/pharmacies.json'

function setPharmaciesData () {
  return {
    type: CONSTS.ACTIONS.SET_PHARMACIES_DATA,
    pharmacies
  }
}

function filterPharmaciesBy (filterString) {
  return {
    type: CONSTS.ACTIONS.FILTER_PHARMACIES,
    filterString
  }
}

export default { setPharmaciesData, filterPharmaciesBy }
