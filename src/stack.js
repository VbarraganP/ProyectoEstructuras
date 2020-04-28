const faker = require("faker");
const fs = require("fs");

function generateHistory(pila) {
    //Generamos el numero de datos requeridos:
    for (let id = 1; id <= 10000000; id++) {
        
        const usuario = faker.name.findName();
        const proveedor = faker.name.findName();
        const estado = faker.random.boolean();
        const pago = faker.commerce.price();
        const cita = faker.date.weekday();
        
        //llamamos el metodo que introduce los datos en la estructura
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
let pila = new Stack();

generateHistory(pila);
let start = process.hrtime();

pila.see();


let diff = process.hrtime(start);
// returns for example [ 1, 2325 ]
console.log(`Operation took ${diff[0] * 1e9 + diff[1]} nanoseconds`);