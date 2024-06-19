async function cautareprodus() {
    let nume = document.getElementById("baracautare");
    const param = new URLSearchParams({cautare:nume.value})
    window.location.href= `/produse.html?${param.toString()}`;
}
document.addEventListener("DOMContentLoaded", function () {
    let cautareprodus = document.getElementById("baracautare").addEventListener('keypress', clickPress)
});
function clickPress(event) {
    if (event.key == "Enter") {
        cautareprodus();
    }
}