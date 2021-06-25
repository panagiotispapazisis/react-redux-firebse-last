import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import config from "./config";

firebase.initializeApp(config);
firebase.auth();
firebase.firestore();
firebase.storage();

export default firebase;
