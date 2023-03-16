//STARTER 
// tsc --init
// tsc --watch

//AS -> ASSERTION, specifichiamo che tipo si elemento si deve aspettare
const canvas = document.getElementById('canvas') as HTMLCanvasElement

//ctx -> ci servire
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

//RENDERE X RIEMPIRE FINESTRA -> rimoduliamo width e heigth
//LARGHEZZA E ALTEZZA INTERNA -> senza considerare browser incluso nel calcolo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//colore della linea
ctx.strokeStyle = "bada55";             //questo e prossimi, sono proprietà STARTER

//tipo di giuntura della linea -> quando una si unisce all'latra come si deve comportare
ctx.lineJoin = "round";

//estremità delle linee -> stesso discorso sopra
ctx.lineCap = "round";

//larghezza linea
ctx.lineWidth = 10;

//SOVRAPPOSIZIONE TRASPARENTE
ctx.globalCompositeOperation = "multiply";

//INDICO QUANDO posso INIZIARE a disegnare
let isDrawing: boolean = false;         //valore INIZIALE di Default per quando entriamo (in generale USARE LET, NEWEST)
let lastX: number = 0;
let lastY: number = 0;
//CON questa variabile -> mod tamarra
let hue: number = 0;



canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event: MouseEvent) => {
    isDrawing = true;               //cosi rimane attivo il disegno anche quando rilascio
    [lastX, lastY] = [event.offsetX, event.offsetY]
});     //per dire che succede quando TENIAMO PREMUTO mouse
canvas.addEventListener('mouseup', () => isDrawing = false); //per disattivare disegno, quando molliamo click 
canvas.addEventListener('mouseout', () => isDrawing = false)   //si usa quando esci dal campo dei blog e ti sparano pop up  con newsletter


//MouseEvent -> Interfaccia che si relaziona con tutti i movimenti del mouse, e ha le sue Proprietà
function draw(event: MouseEvent): void {
    console.log(event);
    // per vedere che va tutto bene, facciamo un console.log -> e vediamo cosa succede muovendo il mouse nella console della pagina html
    if (!isDrawing) return;     //con ! metto valore opposto a variabile
    //qui c'è un return void -> return undefinied
    ctx.strokeStyle = `hsl(${hue},100%,50%)`
    ctx.beginPath(); //devi iniziare a disegnare dove sono io e continuare dove mi sposto io 
    //prende 2 argomenti-> coordinate(x,y)
    ctx.moveTo(lastX, lastY);   //coordinate INIZIALI (con la sostituzione passo dai pallini alle righe)
    ctx.lineTo(event.offsetX, event.offsetY);   //coordinate FINALI 
    ctx.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
    hue++;
    if (hue >= 360)
        hue = 0;
}



