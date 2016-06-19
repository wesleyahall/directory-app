import { ACTIONS } from '../constants'

function handleTableActions (state, action) {
  switch (action.type) {
    case ACTIONS.FILTER_DOCTORS:
      return { filterString: action.filterString.toLowerCase() }
    case ACTIONS.SET_DOCTORS_DATA:
      return {
        data: action.doctors
      }
    default :
      return state
  }
}

function doctorsReducer (state = {}, action) {
  return Object.assign({}, state, handleTableActions(state, action))
}

export default doctorsReducer
