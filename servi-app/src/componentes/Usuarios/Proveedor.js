import Persona from "./Persona.js"
class Proveedor extends Persona {
    constructor(username, telefono, correo, ciudad, password, descripcion,puntuacion) {
        super(username, telefono, correo, ciudad, password);
        this.descripcion = descripcion;
        this.horario="";
        this.citas = [];
        this.pago="";
        this.puntuacion = puntuacion;
    }
    getPuntuacion(){
        return this.puntuacion; 
    }
}
export default Proveedor; 