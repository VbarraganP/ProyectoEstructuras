const initState = {
    services: [
      { id: "1", title: "titulo1222", content: "gg yaqweq casi" },
      { id: "2", title: "titulo222", content: "gg ya qweqwecasi" }
    ],
  };
  const HistReducer = (state = initState, action) => {
    switch (action.type) {
      case "CREATE_SERVICE":
        console.log("created service", action.service);
        return state;
      case 'CREATE_SERVICE_ERROR':
        console.log("create proyect error",action.err);
        return state;
      default:
        return state;
    }
  };
  export default HistReducer;
  