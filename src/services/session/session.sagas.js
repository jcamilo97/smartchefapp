import {
  put, call, select, all, takeLatest
} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import Utils from 'smartchef/src/sagas/utils.sagas';
/** TYPES and Actions */
import AppActions, {
  AppTypes,
} from 'smartchef/src/services/app/app.persist.reducer';
import SessionActions, {
  SessionTypes,
} from 'smartchef/src/services/session/session.reducer';

// import AnalyticsManager from '../utils/analytics_manager';

// export function* setErrorMessage() {
//   yield put(SessionActions.setErrorMessage(''))
// }


export function* getProfile(api, action) {
  const authorization = yield select(Utils.getAuthToken)
  const response = yield call(api.getUserProfile, action.user_id, authorization)
  switch (response.status) {
    case 200:
      yield put(SessionActions.setProfile(response.data.data))
      break
    case 400:
    case 403:
    case 404:
    case 422:
      break
    case 401:
    default:
      console.tron.log(response)
      break
  }
}

function* registerUser(api, action) {
  const { newUser } = action;
  const params = Object.assign({}, newUser, { id_profile: 3 });
  const response = yield call(api.registeruser, params);
  console.tron.log("response", response)
  if (response.ok && response.status < 300) {
    yield put(
      SessionActions.setAppCredentials({
        mail: newUser.mail,
        pass: newUser.pass,
      }),
    );
    yield put(AppActions.setSession(response.data));
  }
}

function* ActionWatcher(api) {
  yield takeLatest(SessionTypes.GET_PROFILE, getProfile, api);
  yield takeLatest(SessionTypes.REGISTER, registerUser, api);
}

export default function* rootSaga(api) {
  yield all([
    ActionWatcher(api)
  ]);
}
