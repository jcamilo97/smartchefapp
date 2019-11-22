import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getDishesByCategory: ['categoryId'],
  setDishesByCategory: ['dishes'],
})

export const DishesTypes = Types
export default Creators

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
  dishes: [],
});

/* ------------- Reducers ------------- */

const setDishesbyCategories = (state, { dishes }) => state.merge(Map({ dishes }))


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_DISHES_BY_CATEGORY]: setDishesbyCategories,
})
