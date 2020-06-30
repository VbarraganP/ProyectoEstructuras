import React,{Component} from 'react'
// import ListHistorial from './ListHistorial'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListHistorial from './ListHistorial';

class Historial extends Component{
    
    render(){
        const { historial } = this.props;
        return(
            <div className="container">
                <div className="center">
                    <ListHistorial historial={ historial } />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    
    return {
        historial: state.firestore.ordered.historial
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'historial' }
    ])
)(Historial);