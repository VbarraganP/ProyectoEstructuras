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
