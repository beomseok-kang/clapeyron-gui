const CREATE_MODEL = "pp/CREATE_MODEL";
const DELETE_MODEL = "pp/DELETE_MODEL";
const CHANGE_MODEL = "pp/CHANGE_MODEL";

const initialState = {
  models: [],
  properties: [],
};

export const createModel = model => ({
  type: CREATE_MODEL,
  payload: model,
  id: model.id || ""
});

export const deleteModel = id => ({
  type: DELETE_MODEL,
  payload: id,
  id
});

export const changeModel = (id, model) => ({
  type: CHANGE_MODEL,
  payload: model,
  id
});

function propertiesPrediction(state = initialState, action) {
  switch(action.type) {
    case CREATE_MODEL:
      return {
        ...state,
        models: state.models.concat(action.payload)
      };
    case DELETE_MODEL:
      return {
        ...state,
        models: state.models.filter(m => m.id !== action.id)
      };
    case CHANGE_MODEL:
      const copiedModels = [...state.models];
      const modelIdx = copiedModels.indexOf(m => m.id === action.id);
      if (modelIdx !== -1) {
        copiedModels.splice(modelIdx, 1, action.payload);
      } else {
        copiedModels.push(action.payload);
      }
      return {
        ...state,
        models: copiedModels
      };
    default:
      return state;
  }
}

export default propertiesPrediction;
