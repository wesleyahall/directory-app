import App from './components/App'
import HomePage from './components/HomePage'
import DoctorSearchPage from './containers/DoctorSearchPage'
import DoctorInfoPage from './containers/DoctorInfoPage'
import HospitalSearchPage from './containers/HospitalSearchPage'
import HospitalInfoPage from './containers/HospitalInfoPage'
import AppointmentPage from './components/AppointmentPage'
import PharmacySearchPage from './containers/PharmacySearchPage'
import PharmacyInfoPage from './containers/PharmacyInfoPage'

export default([
  {
    path: '/',
    component: App,
    indexRoute: {component: HomePage},
    childRoutes: [
      {path: '/doctors', component: DoctorSearchPage},
      {path: '/doctors/:doctorId', component: DoctorInfoPage},
      {path: '/hospitals', component: HospitalSearchPage},
      {path: '/hospitals/:hospitalId', component: HospitalInfoPage},
      {path: '/pharmacies', component: PharmacySearchPage},
      {path: '/pharmacies/:pharmacyId', component: PharmacyInfoPage}
    ]
  },
  {
    path: '/appointment',
    component: App,
    indexRoute: {component: AppointmentPage}
  }
])
