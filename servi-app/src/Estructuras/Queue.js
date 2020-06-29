class Queue {
    constructor() {
        this.items = [];
    } 

    enqueue(element) {
        this.items.push(element);
    } 

    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    } 

    getSize() {
        return this.items.length;
    };

    isEmpty() {
        return this.items.length == 0;
    } 

    peek() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    } 
    printQueue() {
        let str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    } 

};
