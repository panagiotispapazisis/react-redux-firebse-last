import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
const RootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
});

export default RootReducer;