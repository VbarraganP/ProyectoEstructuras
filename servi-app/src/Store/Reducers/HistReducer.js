const initState = {
    Contratos: [
      { id: "1", title: "titulo1222", content: "gg yaqweq casi" },
      { id: "2", title: "titulo222", content: "gg ya qweqwecasi" }
    ],
  };
  const HistReducer = (state = initState, action) => {
    switch (action.type) {
      case "CREATE_HIST":
        console.log("created HISTORIAL", action.historial);
        return state;
      case 'CREATE_HIST_ERROR':
        console.log("create proyect error",action.err);
        return state;
      default:
        return state;
    }
  };
  export default HistReducer;
  