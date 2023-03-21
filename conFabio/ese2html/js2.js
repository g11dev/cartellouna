
var ing = document.getElementById('ingredienti');
ing.addEventListener('click', e => {
    // e.stopPropagation();
    // var riga = e.target;
    // if (riga.classList.contains('barrato'))
    //     riga.classList.remove('barrato');
    // else
        riga.classList.add('barrato');                                               // quando clicco su 'e', prende 'e' e tutti i nodi che ci sono sopra 
});                                                      //in questo caso, poi si applica a cascate anche ai 'nodi genitori'

 
 