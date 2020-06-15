import proveedor from "../Usuarios/Proveedor.js"
import Proveedor from "../Usuarios/Proveedor.js";
class Heap {
    constructor(maxsize) {
        this.Array = new Array(maxsize);
        this.maxsize = maxsize;
        this.size = 0;
    }
    SiftUp(i) {
        let aux;
        while (i > 1 && this.Array[Math.floor(i / 2)].puntuacion < this.Array[i].puntuacion) {
            aux = this.Array[Math.floor(i / 2)];
            this.Array[Math.floor(i / 2)] = this.Array[i];
            this.Array[i] = aux;
            i = Math.floor(i / 2);
        }
    }
    SiftDown(i) {
        let maxindex = i;
        let leftchild = 2 * i;
        let aux;
        if (leftchild <= this.size && this.Array[leftchild].puntuacion > this.Array[maxindex].puntuacion) {
            maxindex = leftchild;
        }
        let rightchild = (2 * i) + 1;
        if (rightchild <= this.size && this.Array[rightchild].puntuacion > this.Array[maxindex].puntuacion) {
            maxindex = rightchild;
        }
        if (i != maxindex) {
            aux = this.Array[i];
            this.Array[i] = this.Array[maxindex];
            this.Array[maxindex] = aux;
            this.SiftDown(maxindex);
        }
    }
    Insert(username, telefono, correo, ciudad, password, descripcion, puntuacion) {

        let data = new proveedor(username, telefono, correo, ciudad, password, descripcion, puntuacion);
        this.size = this.size + 1;
        this.Array[this.size] = data;
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
    HeapSort(){
        let fornumber = this.size;
        let aux = new Array(1); 
        for (var i =0; i<fornumber;i++){
        var result = this.ExtractMax(); 
        aux[i]=result; 
        }
        return aux;
    }
}
export default Heap; 