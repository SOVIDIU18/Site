const pb = new PocketBase('http://127.0.0.1:8090');
async function cautare() {
    let nume = document.getElementById("baracautare");
    const param = new URLSearchParams({cautare:nume.value})
    window.location.href= `/produse.html?${param.toString()}`;
    // console.log(param)
}
document.addEventListener("DOMContentLoaded", function () {
    let cautare = document.getElementById("baracautare").addEventListener('keypress', clickPress)
});
function clickPress(event) {
    if (event.key == "Enter") {
        cautare();
    }
}