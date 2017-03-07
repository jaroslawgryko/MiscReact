export var setDataTemplateTypeReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_DATA_TEMPLATE_TYPE':
      return action.dataTemplateType;
    default:
      return state;
  };
};
