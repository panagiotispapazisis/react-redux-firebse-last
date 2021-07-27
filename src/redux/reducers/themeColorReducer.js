export const themeColorReducer = (state = { themeColor: "light" }, action) => {
  if (action.type === "CHANGE_COLOR") {
    state.themeColor = action.payload;
    return state;
  } else {
    return state;
  }
};
