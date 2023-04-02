const UPDATE = "pp/ac/UPDATE";

const initialState = [];

/**
 * components:
 * list[int]
 */

export const updateAvailableComponents = components => ({
  type: UPDATE,
  payload: components
});

function availableComponents(state = initialState, action) {
  switch(action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
}

export default availableComponents;
