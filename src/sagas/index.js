import { fork, all } from 'redux-saga/effects';

/** ---------- types -------------- */
// import { RoutesTypes } from 'smartchef/app/navigation/routes.reducer'

/** ----------- sagas ------------- */
// import { goTo } from 'smartchef/app/navigation/router.sagas'
import appPersist from 'smartchef/src/services/app/app.persist.sagas';
import sessionSagas from 'smartchef/src/services/session/session.sagas';
import evetnsSagas from 'smartchef/src/services/events/events.sagas';
import categorySagas from 'smartchef/src/services/category/category.sagas';
import dishesSagas from 'smartchef/src/services/dishes/dishes.sagas';
/** ----------- API ------------- */
import API from 'smartchef/src/common/api';

export const Api = API.create();

export default function* rootSaga() {
  yield all([
    fork(appPersist, Api),
    fork(evetnsSagas, Api),
    fork(sessionSagas, Api),
    fork(categorySagas, Api),
    fork(dishesSagas, Api),
  ]);
}
