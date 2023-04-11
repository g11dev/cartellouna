import { useState } from 'react';
// HOOK che fornisce memoria a componenti (counter + fz x aggiornare il counter)

import Image from './Image';
import Alert from './Alert';

function Counter() {
    const [counter, setCounter] = useState(0);          //setCounter -> cambia lo stato

    return (
        <>  {/* React.fragment -> std non si mette per comodità */}
            <h1> {counter} </h1>
            <button onClick={() => setCounter(valorePrecedente => valorePrecedente + 1)}> +1 </button>
            <button onClick={() => setCounter(valorePrecedente => valorePrecedente - 1)}> -1 </button>
            {counter == 6 && (
                <Image src="https://media.tenor.com/aY4wOLYFNZYAAAAd/nba-jordan.gif" alt="scrittura x immagine mancante e non vedenti (NDVA)"/>               //Image = Pippo 
                
            )} {/*uso {} per inserire codice js */}
            {counter < 0 &&(
                <Alert msg="Valore sotto lo zero" type ='danger'/>
            )}

        </>

    )
}

export default Counter;