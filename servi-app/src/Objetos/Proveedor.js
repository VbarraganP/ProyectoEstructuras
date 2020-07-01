import Persona from "./Persona.js"
class Proveedor extends Persona {
    constructor(username, telefono, correo, ciudad,  descripcion,puntuacion) {
        super(username, telefono, correo, ciudad);
        this.descripcion = descripcion;
        this.puntuacion = puntuacion;
    }
}
export default Proveedor; 