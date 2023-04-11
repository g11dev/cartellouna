import { useEffect, useState } from "react"         //react tipo classe object in java
    //useEffect -> sfruttare effetti collaterali (quando componenete non piu puro)
    //useState -> per dare al ns compon una memoria (cioè ricordarsi post rerendering)


export default function Timer() {                   //si può mettere default invece di metterlo in fondov // componente perchè T maiuscola

    //
    const [seconds, setSeconds] = useState(0);      //'0' -> primo stato (timer parte da 0) -> valore di default 0 a seconds | setSeconda la fz che ci permette di aggiornare lo stato
    const [color, setColor] = useState('#00000');
    const [size, setSize] = useState(16);

    useEffect(() => {                               //2 parametri: 1.effect callback (quella che verra seguita in vbase al secondo par useffect -> dipendenze), 2.dipendenze                
        //=> -> per non runnare subito 
        const interval = setInterval(() => {        //setInterval (fz di JS) -> 2 parametri: 1.fz da eseguire, 2 tempo dopo la quale la fz viene richiamata
            //è una fz continua (contrariosetTimeOut -> finisce dopo tempo indicato)
            setSeconds(valorePrecedente => valorePrecedente + 1)
        },1000);
        return () => clearInterval(interval)        //serve per pulire intervalli o timer impostati (in quel caso continuano ad andare avanti)
        // annulla parametro impostato come setInterval
    }, []) //par2 di useEffect -> [] vuoto perchè non ci sono dipendenze e vogliamo sia eseguito solo 1 volta, al primo caricamento della pagina                                
    //useEffect non ha dipendenze



    return (
        <div style={{color:color}}>                {/*inserisco doppia {{}},{ una per l'oggetto}, {una per scrivere js}
        1valore -> proprietaCSS, 2valore -> color da useState() */}

            <input type='color' onChange={(e) => setColor(e.target.value)} />    {/*e -> EVENTO, contiene tutte le informazioni di quell'evento 
            target -> proprietà di e, value -> attributo di input*/}    
            <input type='range' min='10' max='50' onChange={(e) => setSize(e.target.value)} /> 

            <br/> <br/>
            Sono passati <span style= {{color:color, fontSize:`${size}px`}}> {seconds} </span> secondi dal caricamento della pagina
            
       
       
        </div>
    )
}
;

// fare quello fatto con color, con Range, modificando il font size