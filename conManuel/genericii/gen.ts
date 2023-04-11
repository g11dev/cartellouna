const arr: string[] = ['ciao', 'hello'];         //CREO ARRAY -> nome_array: tipo[] = [ elem1, elem2 ]          

const arr2: Array<string> = ['test', 'ciao'];    //MODO ALTERNATIVO

function invertiArrayPacco(items: any[]): any[] {         //NELLE FZ bisogna dichiarare:"(parametri: tipo parametri)":tipo output
    //si segue questa procedura perchè così typescript può cazziarci, ma poi in futuro avremo la vita più semplice per sviluppare certe parti di codice 
    return items.reverse();
}

function invertiArray<T>(items: T[]): T[] {     //<GENERICS> -> nomefz<T> (T=Types), si mette qui per poter utilizzare il generic, quando lo richiami 
    // rendere classi e fz piu generiche, per poi renderle piu specifiche 
    return items.reverse();
}


function invertiArrayNume<T extends number>(items: T[]): T[] {     //nomefz<T extends tipo> -> è cmq number, ma estende proprietà con Number 
    return items.reverse();
}

const arr3 = invertiArray([1, 2, 3, 4, 5]);
// qui stiamo CHIAMANDO una funzione
const arr4 = invertiArray<number | string>(['q', 'w', 'e', 'r', 't', 'y', 4]);

// @ts-ignore -> ignoro errore riga successiva
//TYPESCRIPT -> non modifica js ne runtime, da solo dei tipi
// -> istruisce solo cose in piu per risolvere problemi, e presentarsi più snelli alla fase di testing

//in questo caso, voglio creare degli Array per vincolare gli utilizzatori ad inserire il giusto contenuto
const arr5 = invertiArray<number>([1, 2, 3, 4, 5]);
const arr6 = invertiArray<string>(['q', 'w', 'e', 'r', 't', 'y']);

arr6.push("ciao");

const arr7 = invertiArrayNume<number>([10, 213, 54, 2, 3, 2, 34, 5, 64543]);

//LINK DOCUMENTAZIONE: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads 

//X CREARE CLASSE -> c'è anche metodo alternativo (con attributi vuoti e init)
    //CLASSI -> vengono scritte in PascalCase, js le definisce come Fz Speciali
    //su MDN -> trovo info base (Js), e info specializzate(Ts)
    //possono essere ESTESE una sull'altra 
    //super() -> ho accesso a parametri stabiliti nella classe padre
    //GETTER AND SETTER (es. length)-> stesso nome, per usarli istanza.lenght() -> senza niente mi da valore, con parametro lo setto
    //'private' -> disponibili solo nella classe che lo ha
    //'protected' -> no all'sterno, si alle estensioni
    //'public' -> ovunque
    // non serve istanziare classi STARTER per poter usare i loro metodi (es. Math.metodo -> basta scrivere "Math." per usare il metodo della classeStarter Math)

    //Date() -> classe GIA CREATA da js che noi possiamo usare 
        //"toLocaleDateString()" -> METODO per avere data in stringa (nelle () posso specificare lingua) 
        // Date.now() -> METODO PER OTTENERE TIME STAMP
    
    // ASTRAZIONE
        // se definisco classePersona e la voglio usare per diversi membri scuola (prof, bidello, studente)
        // classePersona -> verrà usata SOLO X ESSERE ESTESA, quindi inserisco solo dati comune alle istanze che voglio creare, creo altre classi figlie
    
    
class Persona {
    //anche le classi possono supportare generics
    nome: string
    cognome: string

    constructor(nome: string, cognome:string) {
        this.nome = nome
        this.cognome = cognome
    }
}

const persona1 = new Persona("Manuel", "ricci");


class Prova<T> {
    private list: T[] = [];

    addItem(item: T) {
        this.list.push(item)                          //this.list -> identifica la lista
                                                        //push -> inserisce nell'ultima posizione
    }

    removeItem(item: T) {
        this.list.splice(this.list.indexOf(item))     //splice -> rimuove un elemento dell'array, e se ne metto un secondo (,dopo la virgola) lo switcha con quello 
    }

}

// qui stiamo CREANDO 1 ISTANZA 
const stringhe = new Prova<string | number>()       // se qui metti <any> sei un coglione perchè hai fatto tutta sta fatica per un cazzo 
stringhe.addItem("ciao");                           //addItem -> è pubblico e fa direttamente parte della classe 
stringhe.addItem(2);
// stringhe.addItem(true);                          // errato perchè file boolean 


//OVERLOAD -> inserire pametri opzionali nelle fz (post parametri inserisco '?' (es.: '?x:any'))
    //posso creare +COSTRUTTORI -> usarne uno a mio piacimento per creare un'istanza