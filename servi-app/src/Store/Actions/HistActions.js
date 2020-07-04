export const DeleteHist = (histElement,id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      //async call to database
      const firestore = getFirestore();
      firestore
        .collection("Contratos")
        .doc(id)
        .delete()
        .then(() => {
          dispatch({ type: "DELETE_HIST", histElement });
        })
        .catch((err) => {
          dispatch({ type: "DELETE_HIST_ERROR", err });
        });
      
    };
  };
  export const createHist = (hist) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      //async call to database
      const firestore = getFirestore();
      firestore
        .collection("Contratos")
        .add({
          ...hist,
        })
        .then(() => {
          dispatch({ type: "CREATE_HIST", hist });
        })
        .catch((err) => {
          dispatch({ type: "CREATE_HIST_ERROR", err });
        });
    };
  };