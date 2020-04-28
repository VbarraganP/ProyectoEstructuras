const faker = require("faker");
const fs = require("fs");

function generateClient(lista) {
    //Generamos el numero de datos requeridos:
    for (let id = 1; id <= 1000000; id++) {

        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const phoneNumber = faker.phone.phoneNumber();
        const city = 'Bogota';
        const email = faker.internet.email();
        const score = faker.random.number();
        const description = faker.random.words(20);
        const owner = faker.name.firstName();

        //llamamos el metodo que introduce los datos en la estructura
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
        const objNode = new Node(data, null, null);

        lista.addToTail(objNode);
    }
}

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
    removeData(data){
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

// Pruebas

let lista = new DobleLinkedList();
generateClient(lista);

let start = process.hrtime();
lista.see();
let diff = process.hrtime(start);
// returns for example [ 1, 2325 ]
console.log(`Operation took ${diff[0] * 1e9 + diff[1]} nanoseconds`);
// console.log(lista.tail);