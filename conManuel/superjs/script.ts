// IEEF -> immediately evoked execution function
    // con le ultime (), chiamo la fz

(function init() {

    const inputs = document.querySelectorAll('.controls input') as NodeListOf<HTMLElement>;

    inputs.forEach(input => input.addEventListener('change', handleUpdate) );
    // alt + shift + freccia -> cloni
    //inputs.forEach(input => input.addEventListener('change', handleUpdate) );
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate) );
        //forEach passa 3 parametri -> elemento su cui sto iterando, indice, array originale
    function handleUpdate (this: HTMLInputElement): void { //this-> inteso come singolo elemento html 
        //this: di standard dà any
        //in questo caso this -> elemento che ha emesso l'evento
        const suffix = this.dataset.sizing || '';       // con || -> se la prima parte è falsa, allora va a vedere cosa c'è dopo la pipe (stringa vuota)
                  //dentro dataset ci sono dati dell'elemento html
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    }

    //querySelectorAll -> metodo di document, che ci puo restituire tutti elementi
        //ci restituisce una node list (che typescript non sa cosa è)
            //ASSERTION -> ci aiuta a far capire a typescript come deve interpretare le cose

})();

