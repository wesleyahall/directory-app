import { combineReducers } from 'redux'
import DoctorsReducer from './reducer_doctors'
import HospitalsReducer from './reducer_hospitals'
import PharmaciesReducer from './reducer_pharmacies'
import DoctorFilterStringReducer from './reducer_doctor_filterstring'
import SelectedDoctorReducer from './reducer_selected_doctor'
import HospitalFilterStringReducer from './reducer_hospital_filterstring'
import SelectedHospitalReducer from './reducer_selected_hospital'

const rootReducer = combineReducers({
  doctors: DoctorsReducer,
  doctorFilterString: DoctorFilterStringReducer,
  selectedDoctor: SelectedDoctorReducer,
  hospitals: HospitalsReducer,
  hospitalFilterString: HospitalFilterStringReducer,
  selectedHospital: SelectedHospitalReducer,
  pharmacies: PharmaciesReducer
})

export default rootReducer
