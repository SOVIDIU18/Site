

function fct1() {
    let pretmin = document.getElementById("fromInput").value
    let pretmax = document.getElementById("toInput").value
    let ordonare = document.getElementById("ordonare_suma").selectedIndex;
    let sorting;
    switch (ordonare) {
        case 1:
            sorting = '+nume'
            break;
        case 2:
            sorting = '+pret'
            break;
        case 3:
            sorting = '-pret'
            break;
        default:
            sorting = '';
    }
    let cerere = axios.get(`http://127.0.0.1:8090/api/collections/centrale/records`, {
        params: {
            filter: `(pret>=${pretmin} && pret<=${pretmax})`,
            perPage: 100,
            sort: sorting
        }
    }).then(function (response) {
        // console.log(response.data)
        let maindiv = document.getElementById("divm");

        for (let i = 0; i < response.data["totalItems"]; i++) {

            let data = response.data["items"][i]
            let nume = data["nume"]
            let pret = data["pret"]
            let stoc = data["stoc"]
            console.log(`${nume} ${pret} ${stoc}`)
            let centrala = document.createElement("div")
            centrala.className = "element"
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
    let pretmin = document.getElementById("fromInput").addEventListener('change', schimba)
    let pretmax = document.getElementById("toInput").addEventListener('change', schimba)
    let pretmin1 = document.getElementById("fromSlider").addEventListener('change', schimba)
    let pretmax1 = document.getElementById("toSlider").addEventListener('change', schimba)
    let sortare = document.getElementById("ordonare_suma").addEventListener('change', schimba)
    fct1();
});

function schimba() {
    let maindiv = document.getElementById("divm");
    maindiv.innerHTML = ""
    console.log("schimba")
    fct1()
}
