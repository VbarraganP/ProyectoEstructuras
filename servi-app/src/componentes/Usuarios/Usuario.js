import  {Persona} from "./Persona.js";

export class usuario extends Persona {
    constructor(username, telefono, correo, ciudad, password) {
        super(username, telefono, correo, ciudad, password);
    }
    contratarproveedor(proveedor, date) {
        confirmacion = false;
        for (i = 0; i < proveedor.citas.lenght(); i++) {
            if (cita == proveedor.citas[i]) {
                confirmacion = true;
            }
        }
        if (confirmacion = false) {
            const contra = new contrato(this.username, proveedor, date);
            this.historial.AñadirContrato(contra);
            contra.estado = "en comienzo";
            return contra;
        }
    }
}
const u1 = new usuario("Mario", 123, "correo2", "bog", "123asd");
console.log(u1.Username);
