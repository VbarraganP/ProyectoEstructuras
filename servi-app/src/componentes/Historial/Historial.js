import React,{Component} from 'react'
// import ListHistorial from './ListHistorial'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListHistorial from './ListHistorial';
import Stack from "../../Estructuras/Stack";
import { DeleteHist } from "../../Store/Actions/HistActions";


class Historial extends Component{

    
    deleteFromStack(stackSortedByDate){

        console.log("click");
        const stackSortedByEntry = stackSortedByDate.slice().sort((a,b)=> a.fecha - b.fecha);
        const popVar = stackSortedByEntry.pop();
        const id = popVar.id
        console.log(popVar, "inside function");
        console.log(stackSortedByDate);
        this.props.DeleteHist(popVar,id);
    };


    render(){
        const {profile}=this.props;
        const { historial } = this.props;
        let aux = new Stack;
        let auxHist = new Stack; 
        aux = historial;

        
        //funcion para obtener solo los datos correspondientes al usuario logueado
        if (aux !== undefined ) {
            
            for (let i = 0; i < aux.length; i++) {
                const HistPos = aux[i];

                if (HistPos.emailUser == profile.email && profile.email !== undefined     ){
                        auxHist.push(HistPos);
                }
            }
        }


        
        // console.log(auxHist, "test");

        //se ordena el array del stack de estos datos para obtenerlos en un orden en base a la fecha de creación
        const auxHistSortByDate = auxHist.items.slice().sort((a,b)=> b.fecha - a.fecha);
        console.log(auxHistSortByDate,"Date");
        const auxHistSortByEntry = auxHistSortByDate.slice().sort((a,b)=> a.fecha - b.fecha);
        console.log(auxHistSortByEntry,"Entry");
        
        

        return(
            <div className="container">
                <div className="lateral">
                    <button type="button" value="borrar" onClick={()=> {this.deleteFromStack( auxHistSortByDate ) } }>borrar</button>
                </div>
                <div className="center">
                    
                   
                    <ListHistorial historial={ auxHistSortByDate } />
                    
                  
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
    // console.log(state.firebase );
    return {
        historial: state.firestore.ordered.historial,
        profile: state.firebase.profile
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'historial' }
    ])
)(Historial);