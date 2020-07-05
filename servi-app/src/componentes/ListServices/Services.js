import React,{Component} from 'react'
import ListServices from './ListServices'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Services extends Component{
    
    render(){
        const { services } = this.props;
        return(
            <div>
                <div>
                    <h1>¿Quienés somos?</h1>
                    <p>ServiApp es un equipo de estudiantes de la Universidad Nacional de Colombia
                     que construyeron una página web con el fin de centralizar la información y
                      contacto de Proveedores en servicios técnicos. </p>
                    <p>Este proyecto fue realizado utilizando React.js, una libreria de JavaScript 
                        utilizada para la administración de interfaz gráfica.</p>
                </div>
                <div>
                    <h1 >Nuestros servicios</h1>
                    <ListServices services={ services } />
                </div>
                <div >
                    <h1 >Contacto</h1>
                    <p>jrojasce@unal.edu.co</p>
                    <p>flopezgo@unal.edu.co</p>
                    <p>vbarraganp@unal.edu.co</p>
                </div>
            </div>
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