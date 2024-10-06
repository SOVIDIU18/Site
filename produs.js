function fcn2() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    console.log(params.get("id"))
    let cerere = axios.get(`https://baza-de-date.pockethost.io/api/collections/centrale/records`, {
        params: {
            filter: `(id="${params.get("id")}")`,
            perPage: 100
        }
    }).then(function (response) {
        console.log(response)
        let maindiv = document.getElementById("maindiv");
        let pozadiv = document.getElementById("poza");
        let titludiv = document.getElementById("titlu");
        let carte_tehnica = document.createElement("a");
        let data = response.data["items"][0]
        let nume = data["nume"]
        let pret = data["pret"]
        let stoc = data["stoc"]
        let manual = data["carte_tehnica"]
        console.log(`${nume} ${pret} ${stoc}`)
        console.log(`${nume} ${pret} ${stoc}`)
        let centrala = document.createElement("div")
        centrala.className = "element"
        let nume1 = document.createElement("p");
        nume1.className = "text"
        let pret1 = document.createElement("p");
        pret1.className = "pret"
        let stoc1 = document.createElement("input");
        stoc1.type = "checkbox";
        let poza = document.createElement("img");
        poza.className = "imagine"
        poza.src = `https://baza-de-date.pockethost.io/api/files/centrale/${data["id"]}/${data["imagine"]}`
        carte_tehnica.href = `https://baza-de-date.pockethost.io/api/files/centrale/${data["id"]}/${data["carte_tehnica"][0]}`
        carte_tehnica.innerHTML = "Carte tehnică"
        nume1.textContent += nume;
        pret1.textContent += pret + " RON ";
        stoc1.checked = (stoc == "true");
        let descriere = document.createElement("p");
        descriere.textContent = data["descriere"]
        descriere.className = "descriere"
        let textdescriere = document.createElement("p")
        textdescriere.className = "textdescriere"
        textdescriere.textContent = "Descriere"

        maindiv.appendChild(centrala)
        pozadiv.appendChild(poza);
        // centrala.appendChild(stoc1);

        titludiv.appendChild(nume1);
        titludiv.appendChild(pret1);
        // titludiv.appendChild(buton)
        // titludiv.appendChild(favoritprodus)
        centrala.appendChild(textdescriere);
        centrala.appendChild(descriere);
        centrala.appendChild(carte_tehnica);

    })
}

document.addEventListener("DOMContentLoaded", function () {
    fcn2()
});

function clickPress(event) {
    if (event.key == "Enter") {
        schimba();
    }
}
function schimba() {
    let maindiv = document.getElementById("divm");
    maindiv.innerHTML = ""
    console.log("schimba")
    fct1()
}

function cauta() {
    fct1();
}

function checkCookieExistence(cookieName) {
    let cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        let cookiePair = cookies[i].split('=');
        if (cookiePair[0] === cookieName) {
            return true; // Cookie found
        }
    }
    return false; // Cookie not found
}