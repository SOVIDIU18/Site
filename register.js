const pb = new PocketBase('http://127.0.0.1:8090');
async function inregistrare(){
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let passwordconfirmed = document.getElementById("passwordconfirmed")
    const data = {
        // "username": "test_username",
        "email": email.value,
        "emailVisibility": true,
        "password": password.value,
        "passwordConfirm": passwordconfirmed.value,
        // "name": "test",
        // "field": [
        //     "RELATION_RECORD_ID"
        // ]
    };
    const record = await pb.collection('users').create(data);
}