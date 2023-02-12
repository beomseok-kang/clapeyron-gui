const ADD_MODEL = "pp/ADD_MODEL";
const DELETE_MODEL = "pp/DELETE_MODEL";

const initialState = {
  models: [],
  properties: [],
};

export const addModel = model => ({
  type: ADD_MODEL,
  payload: model,
  id: model.id
});

export const deleteModel = model => ({
  type: DELETE_MODEL,
  payload: model.id,
  id: model.id
});

function propertiesPrediction(state = initialState, action) {
  switch(action.type) {
    case ADD_MODEL:
      if(!state.models.find(m => m.id === action.id))
        return {
          ...state,
          models: state.models.concat(action.payload)
        };
      else return state;
    case DELETE_MODEL:
      return {
        ...state,
        models: state.models.filter(m => m.id !== action.payload)
      };
    default:
      return state;
  }
}

export default propertiesPrediction;
