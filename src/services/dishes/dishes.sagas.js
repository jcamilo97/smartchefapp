import {
  put, call, select, all, takeLatest
} from 'redux-saga/effects';
// import Utils from 'smartchef/src/sagas/utils.sagas';
import api_transform from 'smartchef/src/common/api_transform';
/** TYPES and Actions */
import DishesActions, { DishesTypes } from 'smartchef/src/services/dishes/dishes.reducers';

function* getDishesbyCategory(api, action) {
  const { categoryId } = action;
  const response = yield call(api.getDishesbyCategory, categoryId);
  let transform = [];
  if (response.ok && response.status < 300) {
    transform = api_transform.apiToDishesByCategory(response.data.data);
    yield put(DishesActions.setDishesByCategory(transform));
  }
}

function* ActionWatcher(api) {
  yield takeLatest(DishesTypes.GET_DISHES_BY_CATEGORY, getDishesbyCategory, api);
}

export default function* rootSaga(api) {
  yield all([ActionWatcher(api)]);
}
