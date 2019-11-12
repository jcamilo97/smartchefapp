import {
  put, call, select, all, takeLatest
} from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage';

import Utils from 'smartchef/src/sagas/utils.sagas'
import apiTransform from 'smartchef/src/common/api_transform';
/** TYPES and Actions */
import AppActions, { AppTypes } from 'smartchef/src/services/app/app.persist.reducer';
import SessionActions, { SessionTypes } from 'smartchef/src/services/session/session.reducer';
import NavigationService from 'smartchef/src/navigationService';

// import AnalyticsManager from '../utils/analytics_manager';
const delay = ms => new Promise(res => setTimeout(res, ms))

export function* setAppStatus(api, action) {
  if (action.credentials.mail && action.credentials.pass) {
    try {
      const response = yield call(api.login, action.credentials);
      let userTransform = {}
      if (response.ok && response.status < 300) {
        userTransform = apiTransform.apiToUser(response.data.user);
        yield put(AppActions.setSession(userTransform));
        yield put(AppActions.setToken(response.data.token));
        const user = JSON.stringify({
          ...userTransform,
          token: response.data.token,
        });
        yield AsyncStorage.setItem('@smartchefUser', user);
        yield put(AppActions.setIsLoggedIn(true));
        yield put(SessionActions.setErrorMessage(null))
        NavigationService.navigate('Home');
      } else {
        yield put(SessionActions.setErrorMessage(response.data.msg));
      }
    } catch (error) {
      // todo sent crash mixpanel
      // console.tron.error('error', error)
    }
  } else {
    console.warn('bad credentials') // eslint-disable-line
  }
}

export function* logout() {
  NavigationService.navigate('Auth');
  yield AsyncStorage.clear();
  yield put(AppActions.setIsLoggedIn(false));
  yield put(AppActions.setLogout());
}

function* ActionWatcher(api) {
  yield takeLatest(SessionTypes.SET_APP_CREDENTIALS, setAppStatus, api)
  yield takeLatest(AppTypes.LOGOUT, logout)
  // yield takeLatest(SessionTypes.FORGOT_PASSWORD, forgotPassword)
}

export default function* rootSaga(api) {
  yield all([
    ActionWatcher(api)
  ]);
}
