const initialState = {
  propertiesPrediction: {
    models: [],
    properties: [],
  }
};

function reducer (state, action) {
  switch (action.type) {
    case "CREATE_MODEL":
      return {
        ...state,
        propertiesPrediction: {
          ...state.propertiesPrediction,
          models: state.propertiesPrediction.models.concat(action.payload)
        }
      };
    case "DELETE_MODEL":
      return {
        ...state,
        propertiesPrediction: {
          ...state.propertiesPrediction,
          models: state.propertiesPrediction.models.filter(m => m.id !== action.id)
        }
      };
    case "CHANGE_MODEL":
      const copiedModels = [...state.propertiesPrediction.models];
      const modelIdx = copiedModels.indexOf(m => m.id === action.id);
      if (modelIdx !== -1) {
        copiedModels.splice(modelIdx, 1, action.payload);
      } else {
        copiedModels.push(action.payload);
      }
      return {
        ...state,
        propertiesPrediction: {
          ...state.propertiesPrediction,
          models: copiedModels
        }
      };
  }
}