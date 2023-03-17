
//INTRO NODE

// const os = require("node:os");                  //ho importato il modulo OS e lo ho asseganto ad una variabile così poi aceddo a tutti i suoi metodi
// const fs = require("node:fs");

// console.log(os.platform());                      //per vedere metodo Platform di os 
// fs.writeFile(__dirname + '/test.txt', "Hello from node", {encoding: 'utf-8'}, () => {        //Metodo ASYNC, writeFile -> nomeFolder + nomeFileDaCreare, "contenuto file", {encoding: tipo linguaggio}
//     //__dirname -> variabile che contiene il percorso del folder in cui stiamo lavorando 
//     console.log('Fatto');                        //mo il console.log() -> compare nel terminale        
// });          
            


//INIZIALIZZAZIONE NODE
    //1 comando
        //npm init (+ schiaccio invio finche non è ready)
    //2
        //rm package.json
    //3
        //npm  init -y
    //4
        //npm install nodemon --save-dev                    //dependendecy per developer
    //5
        //npm install express                               //pacchetto super importante (permette di creare con semplicità anche delle API)
    //6 
        //scrivere "start:dev": "nodemon --watch app.js"              -> nel package.json, sotto script
        //cancellare "test"
    //7
