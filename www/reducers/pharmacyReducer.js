import { ACTIONS } from '../constants'

function handleTableActions (state, action) {
  switch (action.type) {
    case ACTIONS.FILTER_PHARMACIES:
      return { filterString: action.filterString.toLowerCase() }
    case ACTIONS.SET_PHARMACIES_DATA:
      return {
        data: action.pharmacies
      }
    default :
      return state
  }
}

function pharmaciesReducer (state = {}, action) {
  return Object.assign({}, state, handleTableActions(state, action))
}

export default pharmaciesReducer
