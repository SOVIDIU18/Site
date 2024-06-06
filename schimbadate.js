const pb = new PocketBase('http://127.0.0.1:8090');
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
async function schimbaparola() {
    let id = getCookie("id_user")
    let parolaveche = document.getElementById("passwordold")
    let parolanoua = document.getElementById("password")
    console.log(getCookie("id_user"))
    const record2 = await pb.collection('users').getOne(getCookie('id_user'));
    console.log(record2["email"])


    const data = {
        // "username": "test_username_update",
        // "emailVisibility": false,
        "password": parolanoua.value,
        "passwordConfirm": parolanoua.value,
        "oldPassword": parolaveche.value,
        // "name": "test"
    };
    const authData = await pb.collection('users').authWithPassword(
        `${record2["email"]}`,
        parolaveche.value,
    );
    const record = await pb.collection('users').update(id, data);
}