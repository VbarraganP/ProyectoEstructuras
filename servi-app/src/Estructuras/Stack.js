class Stack {
    constructor() {
        this.items = [];
    } 

    push(element) {
        this.items.push(element);
    } 

    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    } 

    getSize() {
        return this.items.length;
    };

    isEmpty() {
        return this.items.length == 0;
    } 

    peek() {
        return this.items[this.items.length - 1];
    } 

    printStack() {
        let str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    } 
};

export default Stack

