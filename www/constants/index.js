import keymirror from 'keymirror'

export default {
  ACTIONS: keymirror({
    FILTER_DOCTORS: null,
    FILTER_HOSPITALS: null,
    FILTER_PHARMACIES: null,
    SELECT_DOCTOR: null,
    SELECT_HOSPITAL: null,
    SELECT_PHARMACY: null,
    RESET_DOCTOR_FILTER: null,
    RESET_HOSPITAL_FILTER: null,
    RESET_PHARMACY_FILTER: null
  })
}
