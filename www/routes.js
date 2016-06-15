import App from './containers/App'
import AppointmentPage from './containers/AppointmentPage'
import DirectoryHomePage from './containers/DirectoryHomePage'
import DoctorSearchPage from './containers/DoctorSearchPage'
import HospitalSearchPage from './containers/HospitalSearchPage'
import PharmacySearchPage from './containers/PharmacySearchPage'

export default([
  {
    path: '/',
    component: App,
    indexRoute: {component: DirectoryHomePage},
    childRoutes: [
      {path: '/doctors', component: DoctorSearchPage},
      {path: '/hospitals', component: HospitalSearchPage},
      {path: '/pharmacies', component: PharmacySearchPage}
    ]
  },
  {
    path: '/appointment',
    component: App,
    indexRoute: {component: AppointmentPage}
  }
])
