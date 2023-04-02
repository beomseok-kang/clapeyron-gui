import { findSharedComponents } from '../../Util/func';
import { updateAvailableComponents } from './availableComponents';

/**
 * Model:
 * {
 *  id: int
 *  name: string
 *  components: list[string]
 * }
 */

const ADD_MODEL = "pp/models/ADD_MODEL";
const DELETE_MODEL = "pp/models/DELETE_MODEL";

const initialState = [];

export const addModel = model => (dispatch, getState) => {
  dispatch({
    type: ADD_MODEL,
    payload: model,
    id: model.id
  });
  const models = getState().models;
  const sharedComponents = findSharedComponents(models);
  dispatch(updateAvailableComponents(sharedComponents));
};

export const deleteModel = model => (dispatch, getState) => {
  dispatch({
    type: DELETE_MODEL,
    payload: model.id,
    id: model.id
  });
  const models = getState().models;
  const sharedComponents = findSharedComponents(models);
  dispatch(updateAvailableComponents(sharedComponents));
};

function models(state = initialState, action) {
  switch(action.type) {
    case ADD_MODEL:
      if(!state.find(m => m.id === action.id))
        return [...state, action.payload];
      else return state;
    case DELETE_MODEL:
      return state.filter(m => m.id !== action.payload);
    default:
      return state;
  }
}

export default models;
