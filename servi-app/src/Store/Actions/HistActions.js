export const DeleteHist = (histElement,id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      //async call to database
      const firestore = getFirestore();
      firestore.collection('historial').doc(id).delete(
        
      ).then(() => {
        dispatch({type: 'DELETE_HIST', histElement});
      }).catch((err) => {
        dispatch({type: 'DELETE_HIST_ERROR', err});
      })
      
    };
  };