function ama_rossa() {
    var ama = document.getElementById('amatriciana');   //assegno alla variabile 'ama' l'oggetto con ID 'amatriciana'
    ama.classList.add('grassetto-rosso');               //all'oggetto ama, aggiungo la classe 'grassetto-rosso'
}

function set_events() {
    var ama = document.getElementById('amatriciana');
    // EVENTO: click sulla scritta
    ama.addEventListener('click', ama_rossa);            //metto un  Listener che quando avviene l'evento 'click', mi applica la fz 'ama_rossa'
}

window.addEventListener('load', set_events);             //ASCOLTO nella 'window', e all'avvenire dell'EVENTO 'load', si attiva la fz 'set_events'
                                                                