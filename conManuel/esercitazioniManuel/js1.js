function kikko(event) {
    const n = document.getElementById("numero").innerHTML;
    console.log(n*1/2);
    event.preventDefault();
}

const form = document.querySelector("button");
document.addEventListener("click", kikko);