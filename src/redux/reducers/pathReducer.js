export const pathReducer = (state = { path: "" }, action) => {
  if (action.type === "CHANGE_PATH") {
    state.path = action.payload;
    return state;
  } else {
    return state;
  }
};
