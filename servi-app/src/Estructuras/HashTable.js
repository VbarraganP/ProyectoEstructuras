import Usuario from "../Usuarios/Usuario.js"; 
class NodeUsuario extends Usuario{
    constructor(username,telefono,correo,ciudad,password){
        super(username,telefono,correo,ciudad,password);
        this.next=null;
    }
}
class HashTable{
    constructor(maxsize){
        this.Array = new Array(maxsize); 
        this.size=0; 
        this.maxsize=maxsize;
    }
    Insert(username,telefono,correo,ciudad,password){
        let usuario = new NodeUsuario(username,telefono,correo,ciudad,password);
        let inthash =7; 
        let j=0;
        while(correo.charAt(j)!=''){
            j++;
        }
        for (let i =0; i<j;i++){
            inthash = (inthash*31 +correo.charCodeAt(i))%this.maxsize;
        }
        if(this.Array[inthash]==null){
            this.Array[inthash]=usuario;
            this.size=this.size+1;
        }else{
            usuario.next=this.Array[inthash].next;
            this.Array[inthash].next=usuario;
            this.size=this.size+1;
        }
    }
    FindUser(correo){
        let inthash =7; 
        let j=0;
        while(correo.charAt(j)!=''){
            j++;
        }
        for (let i =0; i<j;i++){
            inthash = (inthash *31 + correo.charCodeAt(i))%this.maxsize;
        }
        let aux = this.Array[inthash]; 
        while (aux!=null){
            if(aux.correo==correo){
                console.log('done');
                return aux;
            }
            aux=aux.next;
        }
    }   
}
