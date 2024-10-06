function loadfavorite() {
    let cookieNames = document.cookie.split('; ').map(cookie => cookie.split('=')[0]);
    let filtre = "("
    for (let centrala of cookieNames) {
        filtre += `id="${centrala}"||`
    }
    filtre = filtre.slice(0, -2)
    filtre += ")"
    axios.get(`https://baza-de-date.pockethost.io/api/collections/centrale/records`, {
        params: {
            filter: filtre,
            perPage: 100
        }
    }).then(function (response) {
        console.log(response.data)
        let maindiv = document.getElementById("maindiv")
        for (let i = 0; i < response.data["totalItems"]; i++) {
            let data = response.data["items"][i]
            let nume = data["nume"]
            let pret = data["pret"]
            let stoc = data["stoc"]
            let centrala = document.createElement("div")
            centrala.className = "element"

            let nume1 = document.createElement("a");
            nume1.className = "text"
            nume1.href = "/produs.html?id=" + data["id"]
            nume1.textContent += nume;

            let pret1 = document.createElement("p");
            pret1.className = "pret"
            pret1.textContent += pret + " RON ";

            let poza = document.createElement("img");
            poza.className = "imagine"
            poza.src = `https://baza-de-date.pockethost.io/api/files/centrale/${data["id"]}/${data["imagine"]}`

            let favorite = document.createElement("input");
            favorite.type = "button";
            favorite.value = "\uf004";
            favorite.className = "favorite";
            favorite.onclick = () => {
                favorite.classList.toggle('red'); // Adaugă sau elimină clasa .red la click
                delete_cookie(data["id"]);
            };

            let linkpoza = document.createElement("a")
            linkpoza.href = "/produs.html?id=" + data["id"]
            linkpoza.appendChild(poza)

            centrala.appendChild(linkpoza);
            centrala.appendChild(favorite);
            maindiv.appendChild(centrala)
            centrala.appendChild(nume1);
            centrala.appendChild(pret1);
        }
    }).catch(function (error) {
        console.error(error);
    })
}

document.addEventListener("DOMContentLoaded", function () {
    loadfavorite();
})

function get_cookie(name) {
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}

function delete_cookie(name) {
    if (get_cookie(name)) {
        document.cookie = name + "=" +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}
