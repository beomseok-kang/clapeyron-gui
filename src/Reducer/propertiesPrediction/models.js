import { findSharedElements } from '../../Util/func';
import { updateAvailableComponents } from './availableComponents';
import { updateAvailableProperties } from './availableProperties';
import { filterByComponentsIds } from './components';
import { filterByPropertyIds } from './properties';

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

const onModelsUpdate = (dispatch, models) => {
  const sharedComponents = findSharedElements(models, "components");
  const sharedProperties = findSharedElements(models, "properties");
  dispatch(updateAvailableComponents(sharedComponents));
  dispatch(filterByComponentsIds(sharedComponents));
  dispatch(updateAvailableProperties(sharedProperties));
  dispatch(filterByPropertyIds(sharedProperties));
};

export const addModel = model => (dispatch, getState) => {
  dispatch({
    type: ADD_MODEL,
    payload: model,
    id: model.id
  });
  onModelsUpdate(dispatch, getState().models);
};

export const deleteModel = model => (dispatch, getState) => {
  dispatch({
    type: DELETE_MODEL,
    payload: model.id,
    id: model.id
  });
  onModelsUpdate(dispatch, getState().models);
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
