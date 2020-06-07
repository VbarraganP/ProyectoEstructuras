
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
    see() {
        var node = this.head;
        while (node != null) {
            console.log(node.data);
            node = node.next;
            console.clear();
        }
    };
    
};

class SNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
};
class Stack {
    constructor() {
        this.top = null;
        this.lenght = 0;
    };
 
    push(data){
        const newNode = new SNode(data);    
        newNode.next = this.top;
        this.top = newNode;
        this.lenght++;
    };

    pop(){
        if(this.top === null){
            return null;
        };
        const valueToReturn = this.top;
        this.top = this.top.next;
        this.lenght--;
        return valueToReturn;
    };

    getSize(){
        return this.lenght;
    };

    isEmpty(){
        return this.top === null;
    };

    peek(){
        return this.top;
    };
    
    see(){
        var node = this.top;
        while (node != null) {
            console.log(node.data);
            node = node.next;
            console.clear();
        }
    };
};

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    };

    enqueue(data) {
        const node = new SNode(data);

        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        };
        this.lenght++;
    };

    dequeue() {
        const current = this.head;
        this.head = this.head.next;
        this.lenght--;

        return current.value;
    };

    getSize() {
        return this.lenght;
    };

    isEmpty() {
        return this.lenght === 0;
    };

    peek() {
        return this.head.value;
    };

};
class Heap {
    constructor(maxsize){
        this.Array = new Array(maxsize);
        this.maxsize=maxsize;
        this.size=0;
    }
    SiftUp(i){
        var aux;
        while (i>1 && this.Array[i/2]<this.Array[i]){
            aux= this.Array[i/2]; 
            this.Array[i/2]=this.Array[i]; 
            this.Array[i]=aux; 
            i = i/2;
        }
    }
    SiftDown(i){
        var maxindex=i; 
        var leftchild = 2*i; 
        var aux;
        if (leftchild <= this.Array.length && this.Array[leftchild] > this.Array[maxindex]){
            maxindex=leftchild; 
        }
        var rightchild = (2*i)+1; 
        if(rightchild<= this.Array.lenght && this.Array[rightchild]>this.Array[maxindex]){
            maxindex = rightchild; 
        }
        if (i!= maxindex){
            aux = this.Array[i]; 
            this.Array[i]=this.Array[maxindex]; 
            this.Array[maxindex]=aux; 
            SiftDown(maxindex);
        }
    }
    Insert(data){
        if (this.Array.lenght=this.maxsize){
            this.maxsize= this.maxsize*2;
            var aux= new Array(this.maxsize);
            for (j=0; j<this.Array.lenght;j++){
                aux[j]=this.Array[j];
            }
            this.Array=aux; 
        }
        this.size=this.size+1;
        this.Array[this.size]=data; 
        SiftUp(this.size);
    }
    ExtractMax(){
        var result = this.Array[1];
        this.Array[1]=this.Array[this.size];
        this.size=this.size-1; 
        SiftDown(1);
        return result; 
    }
    Changepriority(i,data){
        var olddata=this.Array[i]; 
        this.Array[i]=data; 
        if (data > olddata){
            SiftUp(i);
        }else {
            Siftdown(i);
        }
    }
}
//------------------------------------Programa-/Objetos--------------------------------------------------------------------------------------
class Persona{
    constructor(username,telefono,correo,ciudad,password){
        this.username=username;
        this.telefono=telefono;
        this.correo=correo;
        this.ciudad=ciudad;
        this.password=password; 
        this.historial; 
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
        this.historial.AñadirContrato(contra);
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
        this.estado="";
        this.pago=proveedor.pago; 
        this.cita=Date; 
    }
    finalizarcontrato(){
        this.estado="Finalizado"; 
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
//-----------------------------------------------------------------------------------------------------------------------------------------
class historial {
    constructor(){
        this.Stack = new Stack(); 
    }
    AddContrato(contrato){
        this.Stack.push(contrato); 
    }
    Mostrarcontratos(){
        const aux = this.Stack; 
        while(aux.top.next!=null){
            aux.pop(); 
        }
    }
}
//-------------------------------------------------- Pruebas con los datos -----------------------------------------------------------------
const faker = require("faker");
const fs = require("fs");
// funciones generadoras de datos mediante faker de Node.js
function generateClient(lista) {
    //Generamos el numero de datos requeridos:
    for (let id = 1; id <= 10000; id++) {

        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const phoneNumber = faker.phone.phoneNumber();
        const city = 'Bogota';
        const email = faker.internet.email();

        //Creamos los datos de prueba 
        let data = {
            id: id,
            firstname: firstName,
            lastname: lastName,
            phoneNumber: phoneNumber,
            city: city,
            email: email,
        };
        //llamamos el metodo que introduce los datos en la estructura
        lista.addToTail(data);
    }
}

function generateProv(lista) {
    //Generamos el numero de datos requeridos:
    for (let id = 1; id <= 10000; id++) {

        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const phoneNumber = faker.phone.phoneNumber();
        const city = 'Bogota';
        const email = faker.internet.email();
        const score = faker.random.number();
        const description = faker.random.words(20);
        const owner = faker.name.firstName();

        //creamos los datos de prueba
        let data = {
            id: id,
            firstname: firstName,
            lastname: lastName,
            phoneNumber: phoneNumber,
            city: city,
            email: email,
            score: score,
            description: description,
            owner: owner
        };
        // los añadimos a la estructura
        lista.addToTail(data);
    }
}

function generateHistory(pila) {
    //Generamos el numero de datos requeridos:
    for (let id = 1; id <= 10000; id++) {

        const usuario = faker.name.findName();
        const proveedor = faker.name.findName();
        const estado = faker.random.boolean();
        const pago = faker.commerce.price();
        const cita = faker.date.weekday();

        let data = {
            id: id,
            usuario: usuario,
            proveedor: proveedor,
            estado: estado,
            pago: pago,
            cita: cita
        };

        pila.push(data);
    }
}

// ¿ COMO MEDIMOS EL TIEMPO ? 

//Definimos de que manera vamos a medir el tiempo, para medir el tiempo usamos process.hrtime() la cual nos devuelve un arreglo con dos valores coreespondientes a el tiempo inicial y el tiempo final, posteriormente se realiza la diferencia entre estos dos valores y devuelve el tiempo en nanosegundos esto con el fin de ser lo mas preciso posible en la toma de los tiempos:
//Este metodo nos permite tener varios cronometros , los cuales pueden medir el tiempo simultaneamente, asi para iniciar un nuevo cronometro usamos la siguiente linea de codigo:
let NombreDelCronometro = process.hrtime();
// todos los procesos/funciones/metodos a evualuar los ponemos justo despues de iniciarlizar el cronometro:
/*

    Procesos a evaluar

*/
//finalizamos el cronometro con la siguiente linea:
let diff = process.hrtime(NombreDelCronometro);
// y mostramos el resultado del cronometro mediante:
console.log(`Operation took ${diff[0] * 1e9 + diff[1]} nanoseconds`);
// este metodo fue usado para calcular los tiempos que se muestran en el documento escrito



//--------------------------- creamos las estructuras que vamos a usar ---------------------------------------------


//Creamos una pila la cual contendra los historiales de contratos
let pilaHistorial = new Stack();
generateHistory(pilaHistorial);
//Medimos el tiempo que tomaba mostrar la pila completa
pilaHistorial.see();


//creamos listas doblemente enlazadas para guardar a los usuarios y los provedores
//Clientes:
let listaClientes = new DobleLinkedList();
//medimos el tiempo que toma cargar todos los datos a la lista
generateClient(listaClientes);

//proveedores:
let listaProveedores = new DobleLinkedList();
generateClient(listaProveedores);
//medimos el tiempo que toma eliminar un dato de la lista
//let objetoEliminar = null;

// en este caso el valor es null porque depende de los datos cargados por faker y cada vez que se ejecuta el escript genera nuevo datos aleatorios. 

//listaProveedores.removeData(objetoEliminar);

//Tambien calculamos el tiempo que toma mostrar todos los datos de la lista
//listaProveedores.see();
