const addTodo =
  (todo) =>
  (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("todos")
      .add({
        todo: todo,
      })
      .then(() => {
        dispatch({
          type: "ADD_TODO",
        });
      });
  };

export default addTodo;
