const initState = {
  posts: [
    { id: "1", calificacion: "0", descripcion: "lorem 1" },
    { id: "2", calificacion: "proveedor2", descripcion: "lorem 2" }
  ],
};

const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("created post", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("create post error", action.err);
      return state;
    case "DELETE_POST":
      console.log("delete post ", action.err);
      return state;
    case "DELETE_POST_ERROR":
      console.log("delete post error", action.err);
      return state;
    default:
      return state;
  }
};
export default PostReducer;