const initialState = {
  list: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return state;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
