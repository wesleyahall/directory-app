import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

import doctors from './data/doctors.json'
import hospitals from './data/hospitals.json'
import pharmacies from './data/pharmacies.json'

const localStorageState = localStorage.getItem('cci-directory')
const initialAppState = {
  doctors: [],
  hospitals: [],
  pharmacies: [],
  selectedDoctor: null,
  selectedHospital: null,
  selectedPharmacy: null,
  doctorFilterString: '',
  hospitalFilterString: '',
  pharmacyFilterString: '',
  lastUpdate: null
}

if (localStorageState === null) {
  initialAppState.doctors = localStorageState.doctors
  initialAppState.hospitals = localStorageState.hospitals
  initialAppState.pharmacies = localStorageState.pharmacies
} else {
  initialAppState.doctors = doctors
  initialAppState.pharmacies = pharmacies
  initialAppState.hospitals = hospitals
}

const store = configureStore(initialAppState)

render(
  <Root store={store} />,
  document.getElementById('app')
)
