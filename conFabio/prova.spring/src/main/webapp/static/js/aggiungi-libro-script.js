
// AVVISO -> campo compilato sbagliato
var submit = document.querySelector(".classe"); //come 'getElementById', ma inserisco il richiamo come su css(.classe, #id, tag)

//FRATELLI 
    // querySelector(".classe") -> classi, tag etc
    // getElementById("classe") -> uso solo su id

submit.addEventListener("click", e => {
//    e.preventDefault();                                                     // quando clicki submit non cambia pagina
    e.stopPropagation();
    let titolo = document.getElementById("campo-titolo").value;             // tramite 'value' ottengo valore scritto nel form
    console.log(titolo);  
    if (titolo.length < 4) {
        window.alert("Il campo titolo è troppo corto, servono almeno 4 caratteri");
        //IMPEDIRE INVIO DEL FROM 
        e.preventDefault(); 
    }
    
    let autore = document.getElementById("campo-autore").value;
    console.log(autore);  
    if (autore.length < 4) {
        window.alert("Il campo autore è troppo corto, servono almeno 4 caratteri");
        e.preventDefault(); 
    }

    let anno = parseInt(document.getElementById("campo-anno").value);
    console.log(anno);  
    if (anno < -3000 || anno > 2023) {
        window.alert("Il campo anno è sbagliato, ");
        e.preventDefault();
}
});
