let disap = document.getElementById("butto");
let elimina = document.getElementById("elimina");
let singoli = document.querySelectorAll(".disappari");
console.log(disap);


disap.addEventListener("click", e => {
    console.log('elimina');
    elimina.classList.toggle("appari");               //provare versione con addClass
    //singoli.classList.toggle=
    
})
