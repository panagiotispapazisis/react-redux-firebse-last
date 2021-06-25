export const signIn =
  (creds) =>
  (dispatch, getState, { getFirebase }) => {
    const auth = getFirebase().auth();

    auth.signInWithEmailAndPassword(creds.email, creds.password).then(() => {
      dispatch({
        type: "LOGIN",
      });
    });
  };

export const signUp =
  (creds) =>
  (dispatch, getState, { getFirebase }) => {
    const auth = getFirebase().auth();

    auth
      .createUserWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({
          type: "REGISTER",
        });
      });
  };

export const signOut =
  () =>
  (dispatch, getState, { getFirebase }) => {
    const auth = getFirebase().auth();

    auth.signOut().then(() => {
      dispatch({
        type: "LOG_OUT",
      });
    });
  };

export const forgotPass =
  (email) =>
  (dispatch, getState, { getFirebase }) => {
    const auth = getFirebase().auth();
    auth.sendPasswordResetEmail(email).then(() => {
      dispatch({
        type: "FORGOT",
      });
    });
  };
