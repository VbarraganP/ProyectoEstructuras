import React from 'react'

const PostDetails = (props) => {
    const id = props.id.match.params.id;
    return (
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <div className="container bg-white">
                <h1 className="display-4">Servicios disponibles de {id}</h1>

                <div className="container bg-white center">
                    <p className='lead text-muted'>
                        Los contratos o publicaciones listados a continuacion son verificados y almacenados en la base de datos de ServiApp, podra encontrar una descripcion del servicio y para mayor informacion porfavor pulse el boton correspondiente, Gracias.
                </p>
                </div>
            </div>
        </div>
        
    )
}

export default PostDetails
