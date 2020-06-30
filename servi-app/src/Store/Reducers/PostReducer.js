const initState = {
  services: [
    { id: "1", title: "proveedor1", content: "lorem 1" },
    { id: "2", title: "proveedor2", content: "lorem 2" },
    { id: "3", title: "proveedor3", content: "lorem 3" },
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
    default:
      return state;
  }
};
export default PostReducer;