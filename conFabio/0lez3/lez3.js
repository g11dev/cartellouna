    // DIRETTAMENTE AL CARICAMENTO della pagina
// $('li').addClass('barrato');



    // AL CLICK di un 'li' mi applica la classe a tutti i tag 'li'
// $('li').click(() => {                                //fz LAMBDA
//     $('li').addClass('barrato');    // oggetto preso in considerazione in quel momento (quello in cui accade evento)) 
//     console.log('funziona qualcosa');
// })



    // THIS VERSION (lambda non si fanno col 'this') -> VAI E TORNA
// $(document).ready(() => {                            //fz ANONIMA = senza dichiarare variabili e con '=>'
//     $('li').click(function() {                       //fz CLASSIC = da usa usare con 'this'
//         if ($(this).hasClass('barrato'))
//             $(this).removeClass('barrato');          
//         else $(this).addClass('barrato');
//     });
// })


    // CREO DISSOLVENZA + TASTO RESET
// $(document).ready(() => {
//     $('ul#ingredienti li').click(function(e) {          // ('tag#nome_classe tag_nella_classe') 
//         e.stopPropagation();                          // uso per far si che evento non si propaghi a figli di e
//         $(this).fadeOut(200);
//     });
//     // BOTTONE reset 
//     $('#reset').click(function(e) {
//         $('ul#ingredienti li').fadeIn(200);
//     });
// });


    // CREO DISSOLVENZA + TASTO RESET --> SOSTITUZIONE (this -> e.target)
$(document).ready(() => {
    $('ul#ingredienti li').click(e => {          // ('tag#nome_classe tag_nella_classe') 
        $(e.target).fadeOut(200);
    });
    // BOTTONE reset
    $('#reset').click(e => {
        $('ul#ingredienti li').fadeIn(200);
    });
});