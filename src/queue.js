class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
    };

    enqueue(data){
        this.items[this.end] = data;
        this.end++;
    };

    dequeue(){
        if (this.front === this.end){
            return null;
        };
        const data = this.items[this.front];
        this.front++;
        return data;
    };

    getSize(){
        return this.end - this.front;
    };

    isEmpty(){
        if(this.getSize()=== 0){
            return true;
        }else{
            return false;
        };
    };

    peek(){
        if(this.getSize === 0){
            return null;
        };
        return this.items[this.front];
    }

}