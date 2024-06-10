function fcn2(){
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    console.log(params.get("id"))
    let cerere = axios.get(`http://127.0.0.1:8090/api/collections/centrale/records`, {
        params: {
            filter: `(id="${params.get("id")}")`,
            perPage: 100
        }
    }).then(function (response) {
        console.log(response)
        let maindiv = document.getElementById("maindiv");
        let pozadiv = document.getElementById("poza");
        let titludiv = document.getElementById("titlu");
        let data = response.data["items"][0]
            let nume = data["nume"]
            let pret = data["pret"]
            let stoc = data["stoc"]
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
            poza.src = `http://127.0.0.1:8090/api/files/centrale/${data["id"]}/${data["imagine"]}`
            nume1.textContent += nume;
            pret1.textContent += pret + " RON " ;
            stoc1.checked = (stoc == "true");
            let descriere = document.createElement("p");
            descriere.textContent = data["descriere"]
            descriere.className = "descriere"
            let textdescriere = document.createElement("p")
            textdescriere.className = "textdescriere"
            textdescriere.textContent = "Descriere"
            // let baraprodus = document.createElement("hr")
            // baraprodus.className = "bara-produs"
            let buton = document.createElement("input")
            buton.type = "button"
            buton.value = "Adaugă în coș"
            buton.className="buton"
            // buton.onclick= 
            let favoritprodus = document.createElement("input")
            favoritprodus.type = "button"
            favoritprodus.value = "Adaugă la favorite"
            favoritprodus.className="favoriteprodus"
            // buton.onclick=

            maindiv.appendChild(centrala)
            pozadiv.appendChild(poza);
            // centrala.appendChild(stoc1);
           
            titludiv.appendChild(nume1);
            titludiv.appendChild(pret1);
            titludiv.appendChild(buton)
            titludiv.appendChild(favoritprodus)
            centrala.appendChild(textdescriere);
            centrala.appendChild(descriere);
})
}

document.addEventListener("DOMContentLoaded", function () {
    fcn2()
});