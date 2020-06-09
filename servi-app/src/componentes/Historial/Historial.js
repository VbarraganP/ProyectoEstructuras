class historial {
    constructor() {
        this.Stack = new Stack();
    }
    AddContrato(contrato) {
        this.Stack.push(contrato);
    }
    Mostrarcontratos() {
        const aux = this.Stack;
        while (aux.top.next != null) {
            aux.pop();
        }
    }
}