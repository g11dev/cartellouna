function somma(addendo1: number, addendo2: number):number {
    return addendo1 + addendo2;
}


const risultato = somma(2, 2_3);                     // posso mettere underscore dentro i numeri per miglire visibilità

const risultatoStringa = risultato.toString();
risultatoStringa.toLowerCase();

const a = somma(1,3);

switch(a) {
    case 5:
    case 6:
        console.log(a);


}                                              //modo elegante di usare if else if
