const form = document.querySelector("form");

if (form) {
    form.addEventListener('submit', handleSubmit);

}

function handleSubmit(event) {
    event.preventDefault();
    const isbn = form.querySelector('#isbn');               //mettendo form.querySelector('isbn')
    const title = document.getElementById('title');
    const descrizione = document.getElementById('descrizione');
    const foto = document.getElementById('foto');

    const formData = new FormData();        //FormData -> oggetto globale di js

    formData.append("isbn", isbn.value);
    formData.append("title", title.value);
    formData.append("descrizione", descrizione.value);
    formData.append("foto", foto.files[0]);           //dato che foto è di tipo file, mettiamo "item.file" 
    //perchè il tipo file è un array -> e in questo modo prendiamo solo la prima

    fetch('http://localhost:3000/api/v1/library/', {
        //cambiamo METODO con cui fetch invia i dati (che era payload)
        method: "POST",
        body: formData
        // headers: {
        //     "Content-Type": "multipart/form-data"
        // }
    })
        //facciamo then per leggere la risposta
        .then((response) => {
            // console.log(response)            -> per verificare la risposta
            form.reset();
            alert("caricamento vvenuto con successo!");
        })
        .catch((error) => console.error("Errore", error));

}