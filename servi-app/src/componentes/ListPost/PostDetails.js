import React from 'react'

const PostDetails = (props) => {
    const id = props.id.match.params.id;
    return (
        <div className="">
            <h2>Servicios disponibles de {id}</h2>
            <hr></hr>
            <p>
                Los contratos o publicaciones listados a continuacion son verificados y almacenados en la base de datos de ServiApp, podra encontrar una descripcion del servicio y para mayor informacion porfavor pulse el boton correspondiente, Gracias.
            </p>
        </div>
    )
}

export default PostDetails
