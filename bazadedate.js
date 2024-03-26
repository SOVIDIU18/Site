function fct1() {
    let cerere = axios.get(`http://127.0.0.1:8090/api/collections/centrale/records`, {
        params: {
            filter: ``,
            perPage: 100
        }
    }).then(function (response) {
        console.log(response.data)
        let maindiv = document.getElementById("divm");

        for (let i = 0; i < response.data["totalItems"]; i++) {

            let data = response.data["items"][i]
            let nume = data["nume"]
            let pret = data["pret"]
            let stoc = data["stoc"]
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
            poza.src = "date site\\Site Contcare\\Produse\\Beretta\\Power Max 65P (sistem)\\Power_Max_-_Imagine-removebg-preview.png"
            nume1.textContent += nume;
            pret1.textContent += pret + " RON " ;
            stoc1.checked = (stoc == "true");

            
            centrala.appendChild(poza);
            // centrala.appendChild(stoc1);
            maindiv.appendChild(centrala)
            centrala.appendChild(nume1);
            centrala.appendChild(pret1);
        }
        // document.body.append(nume1[])
    })
}

document.addEventListener("DOMContentLoaded", function () {
    fct1();
});