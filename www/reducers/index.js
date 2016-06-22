import { combineReducers } from 'redux'
import doctors from './doctorReducer'
import pharmacies from './pharmacyReducer'

const rootReducer = combineReducers({
  doctors,
  pharmacies
})

export default rootReducer
