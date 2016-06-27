import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

import doctors from './data/doctors.json'
import hospitals from './data/hospitals.json'
import pharmacies from './data/pharmacies.json'

const initialAppState = {
  doctors: doctors,
  hospitals: hospitals,
  pharmacies: pharmacies,
  selectedDoctor: null,
  selectedHospital: null,
  selectedPharmacy: null,
  doctorFilterString: '',
  hospitalFilterString: '',
  pharmacyFilterString: ''
}

const store = configureStore(initialAppState)

render(
  <Root store={store} />,
  document.getElementById('app')
)
