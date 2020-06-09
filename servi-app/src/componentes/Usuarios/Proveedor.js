
class proveedor extends Persona {
    constructor(username, telefono, correo, ciudad, password, descripcion, horario, dueño, pago) {
        super(username, telefono, correo, ciudad, password);
        this.descripcion = descripcion;
        this.horario = horario;
        this.citas = [];
        this.dueño = dueño;
        this.pago = pago;
        this.puntuacion = 0.0;
    }
}