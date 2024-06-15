const pb = new PocketBase('http://127.0.0.1:8090');
async function cautareprodus() {
    let nume = document.getElementById("baracautare");
    const param = new URLSearchParams({cautareprodus:nume.value})
    window.location.href= `/produse.html?${param.toString()}`;
    // console.log(param)
}
document.addEventListener("DOMContentLoaded", function () {
    let cautareprodus = document.getElementById("baracautare").addEventListener('keypress', clickPress)
});
function clickPress(event) {
    if (event.key == "Enter") {
        cautareprodus();
    }
}