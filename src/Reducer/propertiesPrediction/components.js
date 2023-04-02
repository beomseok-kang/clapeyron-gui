import { getComponentsByIds } from "../../Util/func";

const ADD_COMPONENT = "pp/components/ADD_COMPONENT";
const DELETE_COMPONENT = "pp/components/DELETE_COMPONENT";
const FILTER_BY_COMPONENTS_IDS = "pp/components/FILTER_BY_COMPONENTS_IDS";


/**
 * Component:
 * {
 *  id: int
 *  name: string
 * }
 */

const initialState = [];

export const addComponent = component => ({
  type: ADD_COMPONENT,
  payload: component,
  id: component.id
});

export const deleteComponent = component => ({
  type: DELETE_COMPONENT,
  payload: component.id,
  id: component.id
});

export const filterByComponentsIds = componentsIds => ({
  type: FILTER_BY_COMPONENTS_IDS,
  payload: componentsIds
});

function components(state = initialState, action) {
  switch(action.type) {
    case ADD_COMPONENT:
      if(!state.find(m => m.id === action.id))
        return [...state, action.payload];
      else return state;
    case DELETE_COMPONENT:
      return state.filter(m => m.id !== action.payload);
    case FILTER_BY_COMPONENTS_IDS:
      return getComponentsByIds(action.payload, state);
    default:
      return state;
  }
}

export default components;
