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

    push(data) {
        const newNode = new SNode(data);
        newNode.next = this.top;
        this.top = newNode;
        this.lenght++;
    };

    pop() {
        if (this.top === null) {
            return null;
        };
        const valueToReturn = this.top;
        this.top = this.top.next;
        this.lenght--;
        return valueToReturn;
    };

    getSize() {
        return this.lenght;
    };

    isEmpty() {
        return this.top === null;
    };

    peek() {
        return this.top;
    };

    see() {
        var node = this.top;
        while (node != null) {
            console.log(node.data);
            node = node.next;
            console.clear();
        }
    };
};

