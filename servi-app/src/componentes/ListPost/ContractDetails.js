import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ContractDetails = (props) => {

    const { posts } = props;
    const correo = props.match.params.id
    console.log(props);
    return (
        <div className="">
            <h2>Contratos de {correo} </h2>
            <hr></hr>
            {posts &&
                posts.map(post => {
                    if(post.correo == correo){
                        return (
                            <div>
                                <p>{post.calificacion}</p>
                                <hr />
                                <p>{post.descripcion}</p>
                                <hr/>
                                <p>{post.ciudad}</p>
                                <hr />
                                <p>{post.telefono}</p>
                            </div>
                        )
                    }
                }
            )}
            <button  >Contratar</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        posts: state.firestore.ordered.post
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'post' }
    ])
)(ContractDetails);