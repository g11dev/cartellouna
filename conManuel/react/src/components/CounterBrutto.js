import {useState} from 'react';
// HOOK che fornisce memoria a componenti (counter + fz x aggiornare il counter)

import Image from './Image';

function Counter () {
    const [counter, setCounter] = useState(0);          //setCounter -> cambia lo stato

    const handleClickPlus = () => {                     //handleClick -> reference alla fz
        setCounter(valorePrecedente => valorePrecedente + 1)
    }

    const handleClickNeg = () => {                              // () -> serve per prevenire 'too many re-render' -> dipende da come chiamo "setCounter" (esecuzione della fz immediata non va bene)
                                                                    //antidoto per re-rendering infiniti
        setCounter(valorePrecedente => valorePrecedente - 1)
    }

    return ( 
        <>  {/* React.fragment -> std non si mette per comodità */}                                      
        <h1> {counter} </h1>
        <button onClick= {handleClickPlus}> +1 </button>
        {counter == 6 && (<Image/>)} {/*uso {} per inserire codice js */}
                                     

        <button onClick= {handleClickNeg}> -1 </button>
        {counterP == -6 && (<Image/>)} {/*uso {} per inserire codice js */}
        </>

        
    )
}

export default Counter;