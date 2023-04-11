var f = document.getElementById("arrow")
f.addEventListener("click", (e) =>{
    document.body.scrollIntoView({
    behavior:"smooth"  
    });

});


function f31() {
    var imb = document.getElementById('f3');
    imb.classList.add('diventa-blu');
}

function f32() {
    var imb = document.getElementById('f3');
    imb.classList.remove('diventa-blu');
}


function set_events() {

    var imb = document.getElementById('f3');
    imb.addEventListener('mouseover', f31);
    imb.addEventListener('mouseout', f32);
};

window.addEventListener('load', set_events);

