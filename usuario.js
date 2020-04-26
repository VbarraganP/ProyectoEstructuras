class Persona{
    constructor(username,telefono,correo,ciudad,password){
        this.username=username;
        this.telefono=telefono;
        this.correo=correo;
        this.ciudad=ciudad;
        this.password=password; 
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------
class usuario extends Persona{
    constructor(username,telefono,correo,ciudad,password){
        super(username,telefono,correo,ciudad,password);
    }
    contratarproveedor(proveedor,date){
        const contra = new contrato(this.username,proveedor,date);
        contra.estado="en comienzo"; 
        return contra; 
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------
class proveedor extends Persona {
    constructor(username,telefono,correo,ciudad,password,descripcion,horario,dueño,pago){
        super(username,telefono,correo,ciudad,password);
        this.descripcion=descripcion;
        this.horario=horario; 
        this.dueño=dueño; 
        this.pago=pago;
        this.puntuacion=0.0; 
    }
}
//------------------------------------------------------------------------------------------------------------------------------------------
class contrato {
    constructor(Usuario,proveedor,Date){
        this.Usuario=Usuario;
        this.proveedor=proveedor;
        this.estado="Falso";
        this.pago=proveedor.pago; 
        this.cita=Date; 
    }
    getestado(){
        return this.estado; 
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------
class servicio {
    constructor(nombre){
        this.nombre=nombre; 
        this.proveedor=[];
    }
    addproveedor(proveedor){
        this.proveedor.push(proveedor); 
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------------
class calificacion {
    constructor(puntuacion,comentario){
        this.puntuacion=puntuacion; 
        this.comentario=comentario;
        this.contrato=null; 
    }
}