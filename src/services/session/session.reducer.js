import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  forgotPassword: ['email'],
  setErrorMessage: ['errorMessage'],
  saveDeviceInfo: ['deviceInfo'],
  setAppCredentials: ['credentials'],
  setLocation: ['location'],
  getProfile: ['user_id'],
  setProfile: ['userProfile'],
  register:['newUser']
})

export const SessionTypes = Types
export default Creators

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
  errorMessage: '',
  deviceInfo: null,
  location: {},
  userProfile: {}, // profile
})

/* ------------- Reducers ------------- */

const setErrorMessage = (state, { errorMessage }) => state.mergeDeep(Map({
  errorMessage
}))

const forgotPassword = state => state

const saveDeviceInfo = (state, { deviceInfo }) => state.mergeDeep(Map({
  deviceInfo
}))

const setLocation = (state, { location }) => state.mergeDeep(Map({ location }))

const setProfile = (state, { userProfile }) => state.merge(Map({
  userProfile
}))


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FORGOT_PASSWORD]: forgotPassword,
  [Types.SET_ERROR_MESSAGE]: setErrorMessage,
  [Types.SAVE_DEVICE_INFO]: saveDeviceInfo,
  [Types.SET_LOCATION]: setLocation,
  [Types.SET_PROFILE]: setProfile
})
