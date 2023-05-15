import { getElementsByIds } from "../../Util/func";

const ADD_PROPERTY = "pp/properties/ADD_PROPERTY";
const DELETE_PROPERTY = "pp/properties/DELETE_PROPERTY";
const FILTER_BY_PROPERTY_IDS = "pp/properties/FILTER_BY_PROPERTY_IDS";

/**
 * Property:
 * {
 *  id: int
 *  name: string
 *  variables: list[int]
 * }
 */

const initialState = [];

export const addProperty = property => ({
  type: ADD_PROPERTY,
  payload: property,
  id: property.id
});


export const deleteProperty = property => ({
  type: DELETE_PROPERTY,
  payload: property.id,
  id: property.id
});

export const filterByPropertyIds = propertyIds => ({
  type: FILTER_BY_PROPERTY_IDS,
  payload: propertyIds
});

function properties(state = initialState, action) {
  switch(action.type) {
    case ADD_PROPERTY:
      if(!state.find(m => m.id === action.id))
        return [...state, action.payload];
      else return state;
    case DELETE_PROPERTY:
      return state.filter(m => m.id !== action.payload);
    case FILTER_BY_PROPERTY_IDS:
      return getElementsByIds(action.payload, state);
    default:
      return state;
  }
}

export default properties;
