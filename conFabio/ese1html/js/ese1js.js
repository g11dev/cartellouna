function somma(a,b) {
    return a+b;
}


console.log('Buongiorno!!');

k = 7;       //se non scriviamo niente affianco alla variabile -> variabile GLOBALE
                    //vale per tutti gli script, anche all'interno della fz

var a = 8;   // con 'var', rendo la variabile LOCALE 
             // con 'let', dichiaro la variabile e viene vista solo all'interno della fz in cui si trova 

console.log(a); // come se fosse un print

var c = true;
var c = 3>7;
console.log(c);

var li = [4,6,8,10,18,22]


// CICLO 
for (let x of li) {      // 'in' prendere l'indice della lista (che parte da 0), 'of' prende gli elementi della lista
    console.log(x);     // cin 
}

// SE
if (a>5) {
    console.log('A è maggiore di 5')
} else {
    console.log('A è minore di 5')
}

// USIAMO UNA FZ
var d = somma(li[3],li[0]);
console.log(d);

// ASSEGNAZIONE DI UNA FZ AD UNA VARIABILE
var e = somma;          // rendo la variabile 'e',  e da ora in poi, lei si è integrata la skill di somma e la puo usare quando viene richiamata
console.log(e(3,4));


// FZ LAMBDA
var prod = (x,y) => x*y;

console.log('---------------------------------')

//APPLICAZIONE FOR-EACH di una fz Lambda ad Array
li.forEach(x => {
    console.log(x);
});          // ho aperto le {} perchè l'istruzione che ho inserito non è singola e non contiene return  
