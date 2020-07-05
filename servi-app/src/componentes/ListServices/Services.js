import React,{Component} from 'react'
import ListServices from './ListServices'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Services extends Component{
    
    render(){
        const { services } = this.props;
        return(
            
                
                <ListServices services={ services } />
        
        )
    }
}
const mapStateToProps = (state) => {
    return {
        services: state.firestore.ordered.services
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'services' }
    ])
)(Services);