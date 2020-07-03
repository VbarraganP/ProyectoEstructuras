import React from 'react'
import PostDetails from './PostDetails'
import PostTable from './PostTable'

function Post(props) {
  
    return (
      <div>
        <PostDetails id={props} />
        <PostTable id={props}/>
      </div>
    );
}

export default Post


