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
    let id = getCookie("id_user");
    let parolaveche = document.getElementById("passwordold").value;
    let parolanoua = document.getElementById("passwordnew").value;
    let parolanouaConfirm = document.getElementById("passwordreintrod").value;

    // Verificare lungime parolă nouă
    if (parolanoua.length < 8) {
        const myPopup = new Popup({
            id: "my-popup",
            title: "Eroare",
            content: `Parola trebuie să conțină minim 8 caractere.`,
            showImmediately: true
        });

        setTimeout(() => {
            myPopup.hide();
        }, 2000);

        return;
    }

    // Verificare dacă parola nouă și confirmarea parolei corespund
    if (parolanoua !== parolanouaConfirm) {
        const myPopup = new Popup({
            id: "my-popup",
            title: "Eroare",
            content: `Parola nouă și parola reintrodusă nu corespund.`,
            showImmediately: true
        });

        setTimeout(() => {
            myPopup.hide();
        }, 2000);

        return;
    }

    try {
        console.log(getCookie("id_user"));
        const record2 = await pb.collection('users').getOne(getCookie('id_user'));
        console.log(record2["email"]);

        const data = {
            password: parolanoua,
            passwordConfirm: parolanoua,
            oldPassword: parolaveche
        };

        // Autentificare cu parola veche
        const authData = await pb.collection('users').authWithPassword(record2["email"], parolaveche);

        // Actualizare parolă
        const record = await pb.collection('users').update(id, data);

        // Pop-up de succes
        const successPopup = new Popup({
            id: "success-popup",
            title: "Succes",
            content: `Parola a fost schimbată cu succes.`,
            showImmediately: true
        });

        setTimeout(() => {
            successPopup.hide();
        }, 2000);

    } catch (error) {
        console.error('Eroare la schimbarea parolei:', error);
        const errorPopup = new Popup({
            id: "error-popup",
            title: "Eroare",
            content: `A apărut o eroare la schimbarea parolei. Vă rugăm să încercați din nou.`,
            showImmediately: true
        });

        setTimeout(() => {
            errorPopup.hide();
        }, 2000);
    }
}


// async function schimbaemail() {
//     let id = getCookie("id_user");
//     let emailvechi = document.getElementById("emailold").value;
//     let emailnou = document.getElementById("emailnew").value;
//     let parola = document.getElementById("emailreintrod").value;

//     // Verificare dacă adresa de email nouă și confirmarea adresei corespund
//     // if (emailnou !== emailnouConfirm) {
//     //     const myPopup = new Popup({
//     //         id: "my-popup",
//     //         title: "Eroare",
//     //         content: `Adresa de email nouă și adresa reintrodusă nu corespund.`,
//     //         showImmediately: true
//     //     });

//     //     setTimeout(() => {
//     //         myPopup.hide();
//     //     }, 2000);

//     //     return;
//     // }

//     try {
//         console.log(getCookie("id_user"));
//         // Actualizare adresă de email
//         const authData = await pb.collection('users').authWithPassword(emailvechi, parola);
//         // const record = await pb.collection('users').update(id, data);
//         console.log(pb.authStore.model.id)
//         await pb.collection('users').requestEmailChange(`${emailnou}`);
//         // Pop-up de succes
//         const successPopup = new Popup({
//             id: "success-popup",
//             title: "Succes",
//             content: `Adresa de email a fost schimbată cu succes.`,
//             showImmediately: true
//         });

//         setTimeout(() => {
//             successPopup.hide();
//         }, 2000);

//     } catch (error) {
//         console.error('Eroare la schimbarea adresei de email:', error);
//         const errorPopup = new Popup({
//             id: "error-popup",
//             title: "Eroare",
//             content: `A apărut o eroare la schimbarea adresei de email. Vă rugăm să încercați din nou.`,
//             showImmediately: true
//         });

//         setTimeout(() => {
//             errorPopup.hide();
//         }, 2000);
//         console.log(error.response.data)
//     }
// }
async function stergerecont() {
    try {
        const userId = getCookie("id_user");
        console.log(userId);
        
        await pb.collection('users').delete(userId);

        // Pop-up de succes
        const successPopup = new Popup({
            id: "success-popup",
            title: "Succes",
            content: `Contul a fost șters cu succes.`,
            showImmediately: true
        });

        setTimeout(() => {
            successPopup.hide();
        }, 2000);
    } catch (error) {
        console.error("Eroare la ștergerea contului:", error);
        
        // Pop-up de eroare (opțional)
        const errorPopup = new Popup({
            id: "error-popup",
            title: "Eroare",
            content: `A apărut o problemă la ștergerea contului.`,
            showImmediately: true
        });

        setTimeout(() => {
            errorPopup.hide();
        }, 2000);
    }
}

