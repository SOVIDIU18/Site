function loadfavorite() {
    let cookieNames = document.cookie.split('; ').map(cookie => cookie.split('=')[0]);
    // cookieNames.shift();
    // console.log(cookieNames);
    let filtre = "("
    for (let centrala of cookieNames) {
        filtre += `id="${centrala}"||`
    }
    filtre = filtre.slice(0, -2)
    filtre += ")"
    let cerere = axios.get(`http://127.0.0.1:8090/api/collections/centrale/records`, {
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
            centrala.className = "element" //daca vreau sa modific tot ce e in favorite
            let nume1 = document.createElement("a");
            nume1.className = "text"
            nume1.href = "/produs.html?id=" + data["id"]
            let pret1 = document.createElement("p");
            pret1.className = "pret"
            let stoc1 = document.createElement("input");
            stoc1.type = "checkbox";
            let poza = document.createElement("img");
            poza.className = "imagine"
            poza.src = "date site\\Site Contcare\\Produse\\Beretta\\Power Max 65P (sistem)\\Power_Max_-_Imagine-removebg-preview.png"
            nume1.textContent += nume;
            pret1.textContent += pret + " RON ";
            stoc1.checked = (stoc == "true");
            let favorite = document.createElement("input");
            favorite.type = "button";
            favorite.value = "\uf004";
            favorite.style = "font-family: FontAwesome;"
            favorite.onclick = () => adaugalafavorite(data["id"]);
            favorite.className = "favorite";
            //clasa noua pt editare in favorite + css nou
            let linkpoza = document.createElement("a")
            linkpoza.href = "/produs.html?id=" + data["id"]



            linkpoza.appendChild(poza)
            centrala.appendChild(linkpoza);
            centrala.appendChild(favorite);
            // centrala.appendChild(stoc1);
            maindiv.appendChild(centrala)
            centrala.appendChild(nume1);
            centrala.appendChild(pret1);
        }
    })
        .catch(function (error) { })
}

document.addEventListener("DOMContentLoaded", function () {
    loadfavorite();
})