const libreria = document.querySelector('.libreria');
const ricerca = document.querySelector('#s');
const libri = [];


if (libreria) {
    fetch('http://localhost:3000/api/v1/library/')  //con fetch otteniamo i dati
        .then(response => response.json())      //per ottenere il body della richiesta
        .then(data => {
            libri.push(...data.results)     //results -> campo proveniente dall'api (parte sotto di postma)
            //... -> SPREAD OPERATOR -> viene utilizzato per poter estrarre gli elementi dell'array e inserirli in un altro array (nel caso in cui array dentro array -> matrice)
            //facciamo  un ciclo che assegna elemento per elemento (senza fare ciclo) -> così al posto di libri[0][0] usiamo libri[0] per accedere ad un libro
            popolaLibreria(libri);
        })
        .catch(err => console.error(err));

}

function popolaLibreria(elencoLibri) {
    libreria.innerHTML = elencoLibri.map((libro) => {
        return `
        <div class="libro" id="libro-${libro.id}">
        ${libro.title ? `<h2> ${libro.title}</h2> ` : ''}
        ${libro.foto ? `<div class="thumbnail"> <img src="/uploads/${libro.foto}" alt="${libro.title}"/></div>` : ''}
        ${libro.descrizione ? ` <p> ${libro.descrizione}</p> ` : ''}
        ${libro.isbn ? ` <p> ${libro.isbn}</p> ` : ''}
        </div>
        `;
    }).join('');
}



if (ricerca) {
    ricerca.addEventListener('input', handleSearch);

}

function handleSearch(event) {

    const keyword = event.target.value.toLowerCase();         //event.target -> elemento che ha emesso l'evento (che in  questo caso è il nostro 'search')

    if (keyword) {
        const libriFiltrati = libri.filter((libro) => {
            return libro.isbn.toLowerCase().includes(keyword) || libro.title.toLowerCase().includes(keyword);
        });
        popolaLibreria(libriFiltrati);
    } else {
        popolaLibreria(libri);
    }
}