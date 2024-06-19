const pb = new PocketBase('http://127.0.0.1:8090');
async function login() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let logat = false
    const authData = pb.collection('users').authWithPassword(email.value, password.value).then(function (response) {
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);
        document.cookie = `id_user = ${pb.authStore.model.id}`
        logat = true
        
    }).catch(function () {
        const myPopup = new Popup({
            id: "my-popup",
            title: "Eroare",
            content: `
                Eroare la conectare.`,
                showImmediately: true
        });
        setTimeout(() => {
            myPopup.hide()
        }, 2000);
        return 
    }).finally(function () {
if(logat === true){
   window.location.href = "/schimbadate.html"
}
    })
    pb.authStore.clear();
}
function getCookie(name) {
    let cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        let cookiePair = cookies[i].split('=');
        if (cookiePair[0] === name) {
            return cookiePair[1];
        }
    }
    return null;
}


