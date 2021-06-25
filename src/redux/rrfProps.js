import firebase from "../firebase/firebase";
import store from "./store";
import { createFirestoreInstance } from "redux-firestore";

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default rrfProps;
