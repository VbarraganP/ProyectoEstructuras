import React,{Component} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListHistorialActive from './ListHistorialActive';
import ListHistorialInactive from "./ListHistorialInactive";
import Stack from "../../Estructuras/Stack";
import { DeleteHist } from "../../Store/Actions/HistActions";


class Historial extends Component{

    deleteFromStack(stackSortedByDate){

        console.log("click");
        const stackSortedByEntry = stackSortedByDate.slice().sort((a,b)=> a.fecha - b.fecha);
        const popVar = stackSortedByEntry.pop();
        // const id = popVar.id
        // stackSortedByDate = stackSortedByEntry.slice().sort((a,b)=> b.fecha - a.fecha);
        console.log(popVar, "inside function");
        console.log(popVar);
        console.log(stackSortedByDate);
        // this.props.DeleteHist(popVar,id);
         
        if (popVar !== undefined ) {
            const id = popVar.id
            this.props.DeleteHist(popVar,id);
        }else{

            alert("no hay más historiales");
        }
           
        // console.log(this.props);
    };










    stackInitializationACTIVE(contratos,profile){
        let stackContracts = new Stack;
        
        if (contratos !== undefined) {
            for (let pos = 0; pos < contratos.length; pos++) {
                const contract = contratos[pos];
               
                if (contract.correoClient == profile.email && profile.email !== undefined && contract.estado == "ACTIVO") { 
                    stackContracts.push(contract)      

                } 
    
            }
            
            return stackContracts.items.slice().sort((a,b)=> b.creationDate - a.creationDate);;
            
        }

    }




    stackInitializationINACTIVE(contratos, profile){
        let stackContracts = new Stack;
        
        if (contratos !== undefined) {
            for (let pos = 0; pos < contratos.length; pos++) {
                const contract = contratos[pos];
               
                if (contract.correoClient == profile.email && profile.email !== undefined && contract.estado == "INACTIVO") { 
                    stackContracts.push(contract)      

                } 
    
            }
            
            return stackContracts.items.slice().sort((a,b)=> b.creationDate - a.creationDate);;
            
        }






    }
 

    render(){
        
        let auxContratos = new Stack; 
        const {profile}=this.props;
        const { contratos } = this.props;
        
        console.log(this.stackInitializationACTIVE(contratos,profile), "function called");

        
     

        return(
            <div className="container">
                <div className="center">
                    <h1>ACTIVOS</h1>
                    <ListHistorialActive historial={ this.stackInitializationACTIVE(contratos,profile) } />
               </div>
               <div>
                   <h1>INACTIVOS</h1>
                    <ListHistorialInactive historial={ this.stackInitializationINACTIVE(contratos,profile) } />
               </div>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
      DeleteHist: (historial,id) => dispatch(DeleteHist(historial,id)),
    };
  };

const mapStateToProps = (state) => {
    // console.log(state.firestore.data.Contratos ,"state");
    return {
        contratos: state.firestore.ordered.Contratos,
        profile: state.firebase.profile
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Contratos' }
    ])
)(Historial);