const express = require('express');                     //importo pacchetto

const library = require('./library');                  //importo da library.js

const app = express();

app.set('view engine', 'ejs');                      // dichiariamo che volgiamo usare un ejs
app.use(express.static(__dirname +'/public'))        // express.static -> uso per indicare cartella che contiene oggetti statici che poi userò
 //__dirname -> variabile globale presente in node che ci indica la cartella in cui stiamo lavorando
app.use(express.json());                            //il corpo delle nostre API è in json
app.use('/api/v1/library', library);                //percorso in cui ritroviamo il tutto (basta cambiare numero alla v)



app.get('/', (req, res) => {
    res.render('pages/index');              //in questo modo lo collego al file ejs presente in questo percorso
})

app.get('/libri', (req, res) => {
    res.render('pages/libri');              //alla richiesta '/libri' reinderizzo la pagina html
})

app.listen(3000, () => {                    //avviamo il nostro webServer e scegliamo il numero di porta (usiamo la 3000)(ricordarsi che alcune porte sono già occupate da altri db tipo sql, mongodb (3036))
console.log("Server in ascolto sulla porta 3000")
});