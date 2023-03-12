const UPDATE = "pp/ac/UPDATE";

const initialState = [];

export const updateAvailableComponents = components => ({
  type: UPDATE,
  payload: components
});

function availableComponents(state = initialState, action) {
  return action.payload || state;
}

export default availableComponents;
