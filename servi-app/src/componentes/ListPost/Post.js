import React from 'react'
import PostDetails from './PostDetails'
import ListPost from './ListPost'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";


function Post(props) {
    return (
      <div>
        <PostDetails id={props} />
        <ListPost/>
        
      </div>
    );
}
/*
const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.firestore.ordered.posts,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: `Proveedores${props.id.match.params.id}` }])
)(Post);
*/
export default Post


