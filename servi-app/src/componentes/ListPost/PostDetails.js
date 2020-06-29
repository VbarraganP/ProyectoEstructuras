import React from 'react'

const PostDetails = (props) => {
    const id = props.id.match.params.id;
    return (
        <div className="">
            <h2>Titulo - {id}</h2>
            <p>
                Lorem ipsum
            </p>
        </div>
    )
}

export default PostDetails
