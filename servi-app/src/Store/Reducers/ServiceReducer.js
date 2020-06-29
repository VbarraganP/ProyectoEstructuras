const initState = {
  services: [
    { id: "1", title: "titulo1", content: "gg ya casi" },
    { id: "2", title: "titulo2", content: "gg ya casi" }
  ],
};
const ServiceReducer = (state = initState, action) => {
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
export default ServiceReducer;
