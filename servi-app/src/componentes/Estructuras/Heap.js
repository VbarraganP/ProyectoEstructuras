import {Proveedor} from "../Usuarios/Proveedor.js"
class Heap {
    constructor(maxsize) {
        this.Array = new Array(maxsize);
        this.maxsize = maxsize;
        this.size = 0;
    }
    SiftUp(i) {
        let aux;
        while (i > 1 && this.Array[i / 2].puntuacion < this.Array[i].puntuacion) {
            aux = this.Array[i / 2];
            this.Array[i / 2] = this.Array[i];
            this.Array[i] = aux;
            i = i / 2;
        }
    }
    SiftDown(i) {
        let maxindex = i;
        let leftchild = 2 * i;
        let aux;
        if (leftchild <= this.Array.length && this.Array[leftchild].puntuacion > this.Array[maxindex].puntuacion) {
            maxindex = leftchild;
        }
        let rightchild = (2 * i) + 1;
        if (rightchild <= this.Array.lenght && this.Array[rightchild].puntuacion > this.Array[maxindex].puntuacion) {
            maxindex = rightchild;
        }
        if (i != maxindex) {
            aux = this.Array[i];
            this.Array[i] = this.Array[maxindex];
            this.Array[maxindex] = aux;
            this.SiftDown(maxindex);
        }
    }
    Insert(Proveedor) {
        if (this.Array.lenght = this.maxsize) {
            this.maxsize = this.maxsize * 2;
            let aux = new Array(this.maxsize);
            for (let j = 0; j < this.Array.lenght; j++) {
                aux[j] = this.Array[j];
            }
            this.Array = aux;
        }
        this.size = this.size + 1;
        this.Array[this.size] = Proveedor;
        this.SiftUp(this.size);
    }
    ExtractMax() {
        let result = this.Array[1];
        this.Array[1] = this.Array[this.size];
        this.size = this.size - 1;
        this.SiftDown(1);
        return result;
    }
    Changepriority(i, data) {
        let olddata = this.Array[i].puntuacion;
        this.Array[i].puntuacion = data;
        if (data > olddata) {
            this.SiftUp(i);
        } else {
            this.Siftdown(i);
        }
    }
}
export default Heap; 