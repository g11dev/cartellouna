var submit = document.querySelector("#submit"); //come 'getElementById', ma inserisco il richiamo come su css(.classe, #id, tag)



submit.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var somma = parseInt(n1)+parseInt(n2);
    document.getElementById("somma").value = somma;
    console.log('Somma eseguita!');

})
