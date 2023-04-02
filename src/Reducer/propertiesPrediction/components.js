const ADD_COMPONENT = "pp/components/ADD_COMPONENT";
const DELETE_COMPONENT = "pp/components/DELETE_COMPONENT";

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

function components(state = initialState, action) {
  switch(action.type) {
    case ADD_COMPONENT:
      if(!state.find(m => m.id === action.id))
        return [...state, action.payload];
      else return state;
    case DELETE_COMPONENT:
      return state.filter(m => m.id !== action.payload);
    default:
      return state;
  }
}

export default components;
