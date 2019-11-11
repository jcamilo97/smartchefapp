import { fork, all } from 'redux-saga/effects';

/** ---------- types -------------- */
// import { RoutesTypes } from 'smartchef/app/navigation/routes.reducer'

/** ----------- sagas ------------- */
// import { goTo } from 'smartchef/app/navigation/router.sagas'
import appPersist from 'smartchef/src/services/app/app.persist.sagas';
import sessionSagas from 'smartchef/src/services/session/session.sagas';
import chefsSagas from 'smartchef/src/services/chefs/chefs.sagas';
/** ----------- API ------------- */
import API from 'smartchef/src/common/api';

export const Api = API.create();

export default function* rootSaga() {
  yield all([
    fork(appPersist, Api),
    fork(chefsSagas, Api),
    fork(sessionSagas, Api),
  ]);
}
