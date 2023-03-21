//IMPORTIAMO MODULI
const express = require('express');
const util = require('./util');

// CONFIGURIAMO ROUTER -> Per poter rispondere alle richieste GET POST REQUEST 
const router = express.Router();
const mysql = require('./db');
const libraryDb = new mysql.Db('127.0.0.1', 'root', '', 'dbdevid');            //usiamo porta 3306 perchè std di sql
const multer = require('multer'); //dopo aver fatto "npm i multer"

const storage = multer.diskStorage( {   //in questo modo rendiamo l'immagine leggile dal linguaggio fornito da multer
    destination: function ( req, file, cb ) {
        cb( null, 'public/uploads/' );
    },
    filename: function ( req, file, cb ) {
        let extArray = file.mimetype.split( "/" );
        let extension = extArray[extArray.length - 1];
        cb( null, file.fieldname + '-' + Date.now() + '.' + extension );
    }
} );
const upload = multer( { storage: storage } );


router.post('/', upload.single('foto'), (req, res) => {                //con post possiamo mandare payload -> è un JSON
    //req -> request (li manda il router di express)
    //res -> risposta (li manda il router di express)
    const { isbn, title, descrizione } = req.body;
    const {filename} =req.file;
    // con '?' -> aumneto la sicurezza perchè consegno dati dall'esterno
    libraryDb.connection.query(`INSERT INTO lubri (isbn, title,foto,descrizione) VALUES (?,?,?,?)`, [isbn, title,filename,descrizione],function (error, results, fields) { //function -> metodo query dato da dipendenza installata da mysql, accetta parametri: 1° query, 2°call back function -> chaiamta quando avviene errore 
        //error -> se query sbagliata
        //results -> risultati della query 
        //fields- > campi modificati
        if (error) {
            req.send({ success: false, reason: error.message })
        } else {
            res.send({ success: true, insertId: results.insertId });
        }
    });
})

// //LINK DOVE PESCHIAMO LE INFORMAZIONI
// const ENDPOINT = 'https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json'

// //IMPOSTIAMO PARTE POST PERCORSO URL  '/qualcosa'-> di solito versione dell'API (perchè è più comodo per implementare aggiornamenti e mantenere attive vecchie versioni)

// //5 AZIONI INTERNET
// // GET -> prendiamo info
// // POST -> inviamo info
// // PUT e PATCH -> aggiorniamo info (PAYLOAD: Put si aspetta tutto l oggetto, mentre Patch solo quel putno da correggere )
// // DELETE -> elimina info


router.get('/', async (req, res) => {                  // '/' -> indica cosa mettere dopo stringa sito internet, e in cambio ottengo endpoint
    // const books = await util(ENDPOINT);         //await e async attende l'esecuzione della fz, e quando ha finito va avsnti (se no darebbe problemi)
    libraryDb.connection.query(`SELECT * FROM lubri`, function (error, results, fields) {
        if (error) {
            req.send({ success: false, reason: error.message })
        } else {
        res.send({ success: true, results });
        }
    })
})


//PIU SPECIFICO -> PIU IN BASSO perchè piano piano diventano piu specifici e se no quelli speicfici si mangiano quelli sopra
router.get('/:id', async (req, res) => {                  // '/' -> indica cosa mettere dopo stringa sito internet, e in cambio ottengo endpoint
    // const books = await util(ENDPOINT);         //await e async attende l'esecuzione della fz, e quando ha finito va avsnti (se no darebbe problemi)
    const { id } = req.params;        //{} DESCRUPTURING di 1 valore
    libraryDb.connection.query(`SELECT * FROM lubri WHERE id = ?`, [id], function (error, results, fields) {
        if (error) {
            req.send({ success: false, reason: error.message })
        } else {
        res.send({ success: true, results });
        }
    })
})

router.put('/:id', async (req, res) => {
    const { isbn, title } = req.body;
    const { id } = req.params;
    libraryDb.connection.query(`UPDATE lubri SET isbn='${isbn}', title='${title}', foto='${foto}', descrizione ='${descrizione}' WHERE ID = '${id}'`, function (error, results, fields) {
        if (error) {
            req.send({ success: false, reason: error.message })
        } else {
        res.send({ success: true, affectedRows: results.affectedRows });
        }
    });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;         //con {id} -> scelgo quale parametro gettarmi da l'atttributo params dell'elemento req
    libraryDb.connection.query(`DELETE FROM lubri WHERE isbn='${id}' or id='${id}'`, function (error, results, fields) {
        if (error) {
            req.send({ success: false, reason: error.message })
        } else {
        res.send({ success: true, affectedRows: results.affectedRows })
        }
    })
})


// //usiamo fetch (del browser) perchè spaccava troppo, e non aveva senso fare una cosa nuova
// //fetch -> appartiene al GlobalObject 
// // -> ci restituisce delle info
// // /////////////////////////////////////////////////
// //     fetch(ENDPOINT)
// //         .then((response) => {                       //imposto cosa succede SE FULFILLED
// //             console.log(response);
// //             response.json()                    //prendiamo solo Body rispetto a tutto quello che ci ha dato il then
// //             .then((data) => {                  //utilizzo il then per aprire la promise
// //                 console.log(data);
// //             }) 
// //             .catch((error) => {
// //                 console.error(error);
// //             })
// //         }) 
// //         .catch((error) => {                 //imposto cosa succede SE REJECTED
// //             console.error(error);

// //         })
// // })
// // ////////////////////////////////////////////////////

// router.get('/:isbn', async(req, res) => {
//     const books = await util(ENDPOINT);
//     const {isbn} = req.params;
//     const results = books.filter((book) => book.isbn === isbn);
//     res.send(results);
// });


module.exports = router;                    //module -> oggetto globale di Node

// EJS -> sistema di template html che permette l'import, e ci dà la possibilità di sviluppare meglio
    // -> chiamare pezzi di template