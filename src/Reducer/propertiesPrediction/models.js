const ADD_MODEL = "pp/models/ADD_MODEL";
const DELETE_MODEL = "pp/models/DELETE_MODEL";

const initialState = [];

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
