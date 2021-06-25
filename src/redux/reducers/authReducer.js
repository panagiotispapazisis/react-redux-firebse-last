const authReducer = (state = {}, action) => {
  if (action.type === "LOGIN") {
    return state;
  } else if (action.type === "REGISTER") {
    return state;
  } else if (action.type === "FORGOT") {
    return state;
  } else if (action.type === "LOG_OUT") {
    return state;
  } else {
    return state;
  }
};

export default authReducer;
