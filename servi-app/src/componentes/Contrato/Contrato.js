
class contrato {
    constructor(Usuario, proveedor, Date) {
        this.Usuario = Usuario;
        this.proveedor = proveedor;
        this.estado = "";
        this.pago = proveedor.pago;
        this.cita = Date;
    }
    finalizarcontrato() {
        this.estado = "Finalizado";
    }
}