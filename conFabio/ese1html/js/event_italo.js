const btn = document.getElementById('bottone')
const ama = document.getElementById('amatriciana')

btn.addEventListener('click', e  => {
    console.log('btm');

    ama.classList.add('grassetto-rosso')
})