function ama_rossa() {
    var ama = document.getElementById('amatriciana');
    ama.classList.add('grassetto-rosso');
}

window.addEventListener('load', ama_rossa); 
    // componente che si mette in ascolto di un evento che capita a quell'oggetto 
        // document -> DOM (corrisponde al nodo html (e tutti quelli sotto)), indica dove controllare se e quando avviene evento