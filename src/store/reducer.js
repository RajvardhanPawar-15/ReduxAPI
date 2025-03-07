import initialState from "./initialValue";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Product_list":
      return { ...state, product_list: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
