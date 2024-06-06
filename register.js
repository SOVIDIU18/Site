const pb = new PocketBase('http://127.0.0.1:8090');
async function inregistrare() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let passwordconfirmed = document.getElementById("passwordconfirmed")
    if (password.value !== passwordconfirmed.value) {
        const myPopup = new Popup({
            id: "my-popup",
        //     css: `
         
        //     .clasa {
        //         font-size:333333px;
        //     }
           
        // `,
            title: "Eroare",
            content: `
            {clasa}[Parolele nu corespund.]
            `,
            showImmediately: true
        });
        setTimeout(() => {
            myPopup.hide()
        }, 2000);
        return
    }
    if (password.value.length < 8) {
        const myPopup = new Popup({
            id: "my-popup",
            // css: `
         
            //     .popup {
            //         backgroundColor: red;
            //     }
            // `,
            title: "Eroare",
            content: `Parola trebuie să conțină minim 8 caractere.`,
            showImmediately: true
        });

        setTimeout(() => {
            myPopup.hide();
        }, 2000);

        return;
    }
if(email.value <= 0){
    const myPopup = new Popup({
        id: "my-popup",
        // css: `
     
        //     .popup {
        //         backgroundColor: red;
        //     }
        // `,
        title: "Eroare",
        content: `Emailul nu poate fi gol.`,
        showImmediately: true
    });

    setTimeout(() => {
        myPopup.hide();
    }, 2000);
}
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
    try {
        const record = await pb.collection('users').create(data);
        window.location.href = "/contul meu.html"
    }
    catch {
        const myPopup = new Popup({
            id: "my-popup",
            title: "Eroare",
            content: `
                Vă rugăm, introduceți un email valid.`,
            showImmediately: true
        });
        setTimeout(() => {
            myPopup.hide()
        }, 2000);
        return
    }


}
