import keymirror from 'keymirror'

export default {
  ACTIONS: keymirror({
    UPDATE_STORE: null,
    CHECK_FOR_UPDATE: null,
    FILTER_DOCTORS: null,
    FILTER_HOSPITALS: null,
    SELECT_DOCTOR: null,
    SELECT_HOSPITAL: null,
    RESET_DOCTOR_FILTER: null,
    RESET_HOSPITAL_FILTER: null
  })
}
