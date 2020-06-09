class servicio {
    constructor(nombre) {
        this.nombre = nombre;
        this.proveedores = new DobleLinkedList();
    }
    addproveedor(proveedor) {
        this.proveedores.addToHead(proveedor);
    }
    Listarproveedoresfechareciente() {
        const lista = this.proveedores.head;
        while (lista != null) {
            console.log(lista);
            lista = lista.next;
        }
    }
    Listarproveedoresfechaantigua() {
        const lista = this.proveedores.tail;
        while (lista != null) {
            console.log(lista);
            lista = lista.prev;
        }
    }
    organizarproveedores() {
        const aux = new DobleLinkedList();
        const lista = this.proveedores.head;
        while (lista != null) {
            aux.addToHead(lista.data.puntuacion);
            while (aux.head != null) {
                if (lista.data.puntuacion < aux.head.data.puntuacion) {
                }
            }
        }
    }
    Eliminarproveedor(username) {
        const lista = this.proveedores.head;
        while (lista != null) {
            if (username == lista.data.username) {
                this.proveedores;
            }
            lista = lista.next;
        }
    }
}