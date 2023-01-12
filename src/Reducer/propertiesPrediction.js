const ADD_MODEL = "pp/ADD_MODEL";
const DELETE_MODEL = "pp/DELETE_MODEL";

const initialState = {
  models: [],
  properties: [],
};

export const addModel = model => ({
  type: ADD_MODEL,
  payload: model
});

export const deleteModel = model => ({
  type: DELETE_MODEL,
  payload: model
});

function propertiesPrediction(state = initialState, action) {
  switch(action.type) {
    case ADD_MODEL:
      return {
        ...state,
        models: state.models.concat(action.payload)
      };
    case DELETE_MODEL:
      return {
        ...state,
        models: state.models.filter(m => m !== action.payload)
      };
    default:
      return state;
  }
}

export default propertiesPrediction;
