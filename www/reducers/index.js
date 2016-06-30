import { combineReducers } from 'redux'
import DoctorsReducer from './reducer_doctors'
import HospitalsReducer from './reducer_hospitals'
import PharmaciesReducer from './reducer_pharmacies'
import DoctorFilterStringReducer from './reducer_doctor_filterstring'
import HospitalFilterStringReducer from './reducer_hospital_filterstring'
import PharmacyFilterStringReducer from './reducer_pharmacy_filterstring'
import SelectedDoctorReducer from './reducer_selected_doctor'
import SelectedHospitalReducer from './reducer_selected_hospital'
import SelectedPharmacyReducer from './reducer_selected_pharmacy'

const rootReducer = combineReducers({
  doctors: DoctorsReducer,
  doctorFilterString: DoctorFilterStringReducer,
  selectedDoctor: SelectedDoctorReducer,
  hospitals: HospitalsReducer,
  hospitalFilterString: HospitalFilterStringReducer,
  selectedHospital: SelectedHospitalReducer,
  pharmacies: PharmaciesReducer,
  pharmacyFilterString: PharmacyFilterStringReducer,
  selectedPharmacy: SelectedPharmacyReducer
})

export default rootReducer
