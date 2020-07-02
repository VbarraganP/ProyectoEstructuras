import React,{Component} from 'react'
// import ListHistorial from './ListHistorial'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListHistorial from './ListHistorial';

class Historial extends Component{
    
    render(){
        const {auth, profile}=this.props;
        const { historial } = this.props;
        var aux = new Array;
        var auxHist = new Array; 
        aux = historial;
        if (aux !== undefined ) {
            for (let i = 0; i < aux.length; i++) {
                const HistPos = aux[i];
                
                if (HistPos.emailUser == profile.email && profile.email !== undefined     ){
                        auxHist.push(HistPos);
                        console.log(auxHist, "test");
                }
            }
        }
        
        return(
            <div className="container">
                <div className="center">
                    
                    {/* {console.log(auth.email)} */}
                    <ListHistorial historial={ auxHist } />
                    {console.log(profile.email)}
                    {console.log(historial)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state.firebase );
    
    
    return {
        historial: state.firestore.ordered.historial,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'historial' }
    ])
)(Historial);