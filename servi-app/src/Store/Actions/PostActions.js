export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to database
    const firestore = getFirestore();
    firestore
      .collection("post")
      .add({
        ...post
      })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};
