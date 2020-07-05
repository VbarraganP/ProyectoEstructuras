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
// export const SetCalificacion = (id,calificacionnueva) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     //async call to database
//     const firestore = getFirestore();
//     firestore
//       .collection("post")
//       .doc(id)
//       .set({
//         calificacion: (calificacion + calificacionnueva)/2
//       })
//       .then(() => {
//         dispatch({ type: "UPDATE_POST", calificacion });
//       })
//       .catch((err) => {
//         dispatch({ type: "UPDATE_POST_ERROR", err });
//       });
//     }
// }