
class contrato {
    constructor(Usuario, proveedor, servicio,Date) {
        this.Usuario = Usuario;
        this.proveedor = proveedor;
        this.estado = "";
        this.pago = proveedor.pago;
        this.cita = Date;
        this.servicio = servicio;
    }
    finalizarcontrato() {
        this.estado = "Finalizado";
    }
}