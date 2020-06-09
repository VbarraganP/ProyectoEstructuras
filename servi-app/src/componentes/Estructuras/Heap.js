class Heap {
    constructor(maxsize) {
        this.Array = new Array(maxsize);
        this.maxsize = maxsize;
        this.size = 0;
    }
    SiftUp(i) {
        var aux;
        while (i > 1 && this.Array[i / 2] < this.Array[i]) {
            aux = this.Array[i / 2];
            this.Array[i / 2] = this.Array[i];
            this.Array[i] = aux;
            i = i / 2;
        }
    }
    SiftDown(i) {
        var maxindex = i;
        var leftchild = 2 * i;
        var aux;
        if (leftchild <= this.Array.length && this.Array[leftchild] > this.Array[maxindex]) {
            maxindex = leftchild;
        }
        var rightchild = (2 * i) + 1;
        if (rightchild <= this.Array.lenght && this.Array[rightchild] > this.Array[maxindex]) {
            maxindex = rightchild;
        }
        if (i != maxindex) {
            aux = this.Array[i];
            this.Array[i] = this.Array[maxindex];
            this.Array[maxindex] = aux;
            SiftDown(maxindex);
        }
    }
    Insert(data) {
        if (this.Array.lenght = this.maxsize) {
            this.maxsize = this.maxsize * 2;
            var aux = new Array(this.maxsize);
            for (j = 0; j < this.Array.lenght; j++) {
                aux[j] = this.Array[j];
            }
            this.Array = aux;
        }
        this.size = this.size + 1;
        this.Array[this.size] = data;
        SiftUp(this.size);
    }
    ExtractMax() {
        var result = this.Array[1];
        this.Array[1] = this.Array[this.size];
        this.size = this.size - 1;
        SiftDown(1);
        return result;
    }
    Changepriority(i, data) {
        var olddata = this.Array[i];
        this.Array[i] = data;
        if (data > olddata) {
            SiftUp(i);
        } else {
            Siftdown(i);
        }
    }
}
