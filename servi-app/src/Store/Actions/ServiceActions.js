export const createService = (service) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async call to database
    const firestore = getFirestore();
    firestore.collection('services').add({
      ...service,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_SERVICE', service});
    }).catch((err) => {
      dispatch({type: 'CREATE_SERVICE_ERROR', err});
    })
    
  };
};
