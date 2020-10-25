const initialState = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state.list];
      newList.push(action.payload);

      return {
        ...state,
        list: newList,
      };
    }

    case "SET_ACTIVE_HOBBY": {
      return {
        ...state,
        activeId: action.payload.id,
      };
    }

    case "DELETE_HOBBY": {
      let newList = [...state.list];

      const index = newList.findIndex((x) => x.id === action.payload.id);

      newList.splice(index, 1);

      return {
        ...state,
        list: newList,
      };
    }

    default: {
      return state;
    }
  }
};

export default hobbyReducer;
