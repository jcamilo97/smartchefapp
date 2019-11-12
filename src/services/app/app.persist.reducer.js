import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setSession: ['sessionData'],
  logout: null,
  setIsLoggedIn: ['isLoggedIn'],
  setToken: ['token'],
  setLogout:['']
})

export const AppTypes = Types;
export default Creators;

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
  sessionData: {},
  isLoggedIn: false,
  token: null,
})

/* ------------- Reducers ------------- */

const setLogout = state => state.merge(Map({
  sessionData: {},
}));

const setSession = (state, { sessionData }) =>
  state.mergeDeep(Map({ sessionData }));

const setIsLoggedIn = (state, { isLoggedIn }) =>
  state.mergeDeep(Map({ isLoggedIn }));

const setToken = (state, { token }) =>
  state.mergeDeep(Map({ token }));

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SESSION]: setSession,
  [Types.SET_LOGOUT]: setLogout,
  [Types.SET_IS_LOGGED_IN]: setIsLoggedIn,
  [Types.SET_TOKEN]:setToken,
})
