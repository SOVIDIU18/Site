const pb = new PocketBase('http://127.0.0.1:8090');
async function login() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    const authData = pb.collection('users').authWithPassword(email.value, password.value).then(function (response) {
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);
        document.cookie = `id_user = ${pb.authStore.model.id}`
    }).catch(function () {
        alert("Nu s-a logat")
    })

    // const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });

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
async function stergerecont() {
    await pb.collection('users').delete(getCookie("id_user"));
}
