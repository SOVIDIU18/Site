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
        let data = response.data["items"][0]
            let nume = data["nume"]
            let pret = data["pret"]
            let stoc = data["stoc"]
            console.log(`${nume} ${pret} ${stoc}`)
            console.log(`${nume} ${pret} ${stoc}`)
            let centrala = document.createElement("div")
            centrala.className = "element"
            let nume1 = document.createElement("a");
            nume1.className = "text"
            nume1.href = "/produs.html?id="+data["id"]
            let pret1 = document.createElement("p");
            pret1.className = "pret"
            let stoc1 = document.createElement("input");
            stoc1.type = "checkbox";
            let poza = document.createElement("img");
            poza.className = "imagine"
            poza.src = "date site\\Site Contcare\\Produse\\Beretta\\Power Max 65P (sistem)\\Power_Max_-_Imagine-removebg-preview.png"
            nume1.textContent += nume;
            pret1.textContent += pret + " RON " ;
            stoc1.checked = (stoc == "true");
            let descriere = document.createElement("p");
            descriere.textContent = data["descriere"]
            descriere.className = "descriere"

            
            centrala.appendChild(poza);
            // centrala.appendChild(stoc1);
            maindiv.appendChild(centrala)
            centrala.appendChild(nume1);
            centrala.appendChild(pret1);
            centrala.appendChild(descriere);
})
}

document.addEventListener("DOMContentLoaded", function () {
    fcn2()
});