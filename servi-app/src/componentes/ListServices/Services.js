import React,{Component} from 'react'
import ListServices from './ListServices'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Services extends Component{
    
    render(){
        const { services } = this.props;
        return(
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <div className="container bg-white">
                    <h1>¿Quienés somos?</h1>
                    <p>ServiApp es un equipo de estudiantes de la Universidad Nacional de Colombia
                     que construyeron una página web con el fin de centralizar la información y
                      contacto de Proveedores en servicios técnicos. </p>
                    <p>Este proyecto fue realizado con React.   js, una libreria de JavaScript 
                        utilizada para la administración de interfaz gráfica, Firebase para almacenar la informacion y el Hosting, Redux para el control de estados y comunicacion entre componentes en React y otras tecnologias como emailjs.</p>
                </div>
                <div>
                    <h1 >Nuestros servicios</h1>
                    <ListServices services={ services } />
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