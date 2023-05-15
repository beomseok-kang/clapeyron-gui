const UPDATE = "pp/ap/UPDATE";

const initialState = [];

/**
 * properties:
 * list[int]
 */

export const updateAvailableProperties = properties => ({
  type: UPDATE,
  payload: properties
});

function availableProperties(state = initialState, action) {
  switch(action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
}

export default availableProperties;
