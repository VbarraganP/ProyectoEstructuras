import React, { Component } from 'react'
import ListPost from './ListPost'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Heap from '../../Estructuras/Heap'

class PostTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id.match.params.id,
        }
    }
    
    render() {
        let Ht = new Heap(10);
        const { posts } = this.props;
        const id = this.state.id;
        return (
            <div className='card margin-20  mx-auto' style={{ width: 1000 }}>
                <div className="card-body mx-auto">
                    <div className="row center">
                        <ListPost posts={posts} id={id} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.post
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'post' }
    ])
)(PostTable);
