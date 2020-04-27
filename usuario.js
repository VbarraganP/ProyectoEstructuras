//------------------------------------Estructuras---------------------------------------------------------------------------------------
class Node{
    constructor(data, next, prev){
        this.data = data;
        this.next = next;
        this.prev = prev;
    };
} 
class DobleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = null;
    };

    addToHead(data){
        const newNode = new Node(data, this.head,null);

        if(this.head){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }else{
            this.head = newNode;
            this.tail = newNode;
        };
        this.size++;
    };

    addToTail(data){
        const newNode = new Node(data,null,this.tail);
        
        if(this.tail){
            newNode.prev = this.tail;
            this.tail.next= newNode;
            this.tail = newNode;
        }else{
            this.tail = newNode;
            this.head = newNode;
        };
        this.size++;
    };

    inserAt(data, index){
        if(index < 0 || index > this.size){
            return null;
        };

        const newNode = new Node(data,null,null);
        let current = this.head;
        let previous;
        if(index === 0){
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        }else{
            for(let i = 0; i < index; i++){
                previous = current;
                current = current.next;
            };
            newNode.next = current;
            newNode.prev = previous;
            current.prev = newNode;
            previous.next = newNode;
        };
        this.size++;
    };

    removeFromHead(){
        if(!this.head){
            return null;
        };
        const valueToReturn =this.head.data;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        };
        this.size--;
        return valueToReturn;
    };

    removeFromTail(){
        if(!this.tail){
            return null;
        };

        const valueToReturn = this.tail.data;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        };
        this.size--;
        return valueToReturn;
    };
    removeData(){
        let current = this.head;
        let previous = null;
        
        while(current !== null){
            if(current.data === data){
                if(!previous){
                    return this.removeFromHead();
                }else if (!current.next){
                    return this.removeFromTail();
                }else {
                    previous.next = current.next;
                    current.next.prev = previous;
                };
                this.size--;
                return current.data;
            };
            previous = current;
            current = current.next;
        };
        return null;
    };

    getSize(){
        return this.size;
    };

    isEmpty(){
        return this.size === 0;
    };
    
};

//------------------------------------Programa-------------------------------------------------------------------------------------------
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
        confirmacion = false; 
        for (i =0;i<proveedor.citas.lenght();i++){
            if (cita==proveedor.citas[i]){
                confirmacion = true; 
            }
        } 
        if (confirmacion = false){
        const contra = new contrato(this.username,proveedor,date);
        contra.estado="en comienzo"; 
        return contra; 
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------
class proveedor extends Persona {
    constructor(username,telefono,correo,ciudad,password,descripcion,horario,dueño,pago){
        super(username,telefono,correo,ciudad,password);
        this.descripcion=descripcion;
        this.horario=horario; 
        this.citas =[];
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
        this.proveedores= new DobleLinkedList();
    }
    addproveedor(proveedor) {
        this.proveedores.addToHead(proveedor);
    }
    Listarproveedoresfechareciente(){
        const lista = this.proveedores.head;
        while (lista != null){
            console.log(lista); 
            lista= lista.next; 
        }
    }
    Listarproveedoresfechaantigua(){
        const lista = this.proveedores.tail; 
        while (lista != null){
            console.log(lista); 
            lista= lista.prev; 
        }
    }
    organizarproveedores(){
        const aux = new DobleLinkedList(); 
        const lista = this.proveedores.head; 
        while (lista != null){
            aux.addToHead(lista.data.puntuacion); 
            while (aux.head!= null){
                 if (lista.data.puntuacion < aux.head.data.puntuacion) {
                 }
            }
        }
    }
    Eliminarproveedor(username){
        const lista = this.proveedores.head; 
        while (lista!=null){
            if (username == lista.data.username){
                this.proveedores;
            }
            lista = lista.next; 
        }
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


class Stack extends Node{
    constructor(data, next, prev){
        super(data, next, prev);
    }
    addToStack(data){
        const newNode = new Node(data, this.head,null);

        if(this.head){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }else{
            this.head = newNode;
            this.tail = newNode;
        };
        this.size++;
    };
    getStack(this){
        if (this.head == null){
            console.log("No hay nada almacenado");
            return
        }
        currentNode = this.head;

        while (true) {
            if (currentNode == null){
                break
            }
            console.log(currentNode.data);
            currentNode = currentNode.next;    
        }
    };
}

class GenerarHistorial{
    constructor(contrato){
        this.contrato=contrato;
    }
    guardarData(contrato){
        
        const Stack0 = Stack.addToStack(contrato);
    }
    
}

class Historial{
    constructor(contrato){
        this.Stack0 = GenerarHistorial.guardarData(contrato);

    }
    mostrarHistorial(Stack0){
        Stack.getStack(Stack0);

    }
    
}