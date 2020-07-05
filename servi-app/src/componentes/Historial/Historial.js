import React,{Component} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListHistorialActive from './ListHistorialActive';
import ListHistorialInactive from "./ListHistorialInactive";
import Stack from "../../Estructuras/Stack";
import { DeleteHist } from "../../Store/Actions/HistActions";


class Historial extends Component{
    
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
            
            return stackContracts.items.slice().sort((a,b)=> b.creationDate - a.creationDate);
            
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();  
        const aux = new Array
         for (let index = 0; index < this.props.contratos.length; index++) {
            if(this.props.contratos[index].estado=="ACTIVO" && this.props.contratos[index].correoClient==this.props.profile.email){
                aux.push(this.props.contratos[index]);
            }
         }
         aux.slice().sort((a,b)=> a.creationDate - b.creationDate)
         console.log(aux);
         this.props.DeleteHist(aux[0],aux[0].id);
   }
 

    render(){
        
        let auxContratos = new Stack; 
        const {profile}=this.props;
        const { contratos } = this.props;
        

     

        return(
            <div className="container">
                <div className="center">
                    <h1>Contratos en Curso</h1>
                    <button className="btn btn-danger" onClick ={this.handleSubmit}>CancelarReciente</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Calificación</th>
                        <th scope="col">Servicio</th>
                        <th scope="col">Nombre Proveedor</th>
                        <th scope="col">Correo Proveedor</th>
                        <th scope="col">Más información</th>
                        <th scope="col">Finalizar</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <ListHistorialActive historial={ this.stackInitializationACTIVE(contratos,profile) } />
               <div>
               <h1>Contratos Finalizados</h1>
                <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Calificación</th>
                            <th scope="col">Servicio</th>
                            <th scope="col">Nombre Proveedor</th>
                            <th scope="col">Correo Proveedor</th>
                            <th scope="col">Más información</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
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
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'Contratos' }
    ])
)(Historial);