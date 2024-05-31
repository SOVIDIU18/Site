let folosestecautare = false;

function fct1() {
    let pretmin = document.getElementById("fromInput").value
    let pretmax = document.getElementById("toInput").value
    let ordonare = document.getElementById("ordonare_suma").selectedIndex;
    let sorting;
    let cautare = document.getElementById("baracautare").value;
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
    let filtre = `((pret>=${pretmin} && pret<=${pretmax})`
    if (cautare.length > 0) {
        filtre += `&& nume~"${cautare}"`
    }
    let producator = ""
    let checkboxbaxi = document.getElementById("checkboxbaxi")
    let checkboxberetta = document.getElementById("checkboxberetta")
    let checkboxbosch = document.getElementById("checkboxbosch")
    let checkboxbuderus = document.getElementById("checkboxbuderus")
    let checkboxdedietrich = document.getElementById("checkboxdedietrich")
    if (checkboxbaxi.checked) {
        producator += "&& ( "
        producator += `producator ~ "baxi"`
    }
    if (checkboxberetta.checked) {
        if (producator.length <= 0) {
            producator += "&& ( "

        }
        else {
            producator += "||"
        }

        producator += `producator ~ "beretta"`

    }
    if (checkboxbosch.checked) {
        if (producator.length <= 0) {
            producator += "&& ( "

        }
        else {
            producator += "||"
        }

        producator += `producator ~ "bosch"`

    }
    if (checkboxbuderus.checked) {
        if (producator.length <= 0) {
            producator += "&& ( "

        }
        else {
            producator += "||"
        }

        producator += `producator ~ "buderus"`

    }
    if (checkboxdedietrich.checked) {
        if (producator.length <= 0) {
            producator += "&& ( "

        }
        else {
            producator += "||"
        }

        producator += `producator ~ "dedietrich"`

    }
    if (producator.length > 0) {
        producator += ")"
        filtre += producator
    }
    // filtre += ")"
    let putere_incalzire_nr = ""
    let checkboxîncălzire10 = document.getElementById("checkboxîncălzire10")
    let checkboxîncălzire11_20 = document.getElementById("checkboxîncălzire11_20")
    let checkboxîncălzire21_30 = document.getElementById("checkboxîncălzire21_30")
    let checkboxîncălzire31_40 = document.getElementById("checkboxîncălzire31_40")
    let checkboxîncălzire41_50 = document.getElementById("checkboxîncălzire41_50")
    let checkboxîncălzire51_60 = document.getElementById("checkboxîncălzire51_60")
    let checkboxîncălzire61_70 = document.getElementById("checkboxîncălzire61_70")
    let checkboxîncălzire71_80 = document.getElementById("checkboxîncălzire71_80")
    let checkboxîncălzire81_90 = document.getElementById("checkboxîncălzire81_90")
    let checkboxîncălzire91_100 = document.getElementById("checkboxîncălzire91_100")
    let checkboxîncălzire100 = document.getElementById("checkboxîncălzire100")

    if (checkboxîncălzire10.checked) {
        putere_incalzire_nr += "&&("
        putere_incalzire_nr += `putere_incalzire_nr <= 10`
    }
    if (checkboxîncălzire11_20.checked) {
        if (putere_incalzire_nr.length <= 0) {
            putere_incalzire_nr += "&& ( "
        }
        else {
            putere_incalzire_nr += "||"
        }

        putere_incalzire_nr += 'putere_incalzire_nr >= 11 && putere_incalzire_nr<=20'
    }
    if (checkboxîncălzire21_30.checked) {
        if (putere_incalzire_nr.length <= 0) {
            putere_incalzire_nr += "&& ( "

        }
        else {
            putere_incalzire_nr += "||"
        }

        putere_incalzire_nr += 'putere_incalzire_nr >= 21 && putere_incalzire_nr<=30'

    }
    if (checkboxîncălzire31_40.checked) {
        if (putere_incalzire_nr.length <= 0) {
            putere_incalzire_nr += "&& ( "

        }
        else {
            putere_incalzire_nr += "||"
        }

        putere_incalzire_nr += 'putere_incalzire_nr >= 31 && putere_incalzire_nr<=40'

    }
    if (checkboxîncălzire41_50.checked) {
        if (putere_incalzire_nr.length <= 0) {
            putere_incalzire_nr += "&& ( "

        }
        else {
            putere_incalzire_nr += "||"
        }

        putere_incalzire_nr += 'putere_incalzire_nr >= 41 && putere_incalzire_nr<=50'

    }
    if (checkboxîncălzire51_60.checked) {
        if (putere_incalzire_nr.length <= 0) {
            putere_incalzire_nr += "&& ( "

        }
        else {
            putere_incalzire_nr += "||"
        }

        putere_incalzire_nr += 'putere_incalzire_nr >= 51 && putere_incalzire_nr<=60'

    }
    if (checkboxîncălzire61_70.checked) {
        if (putere_incalzire_nr.length <= 0) {
            putere_incalzire_nr += "&& ( "

        }
        else {
            putere_incalzire_nr += "||"
        }

        putere_incalzire_nr += 'putere_incalzire_nr >= 61 && putere_incalzire_nr<=70'

    }
    // if (checkboxîncălzire71_80.checked) {
    //     if (putere_incalzire_nr.length <= 0) {
    //         putere_incalzire_nr += "&& ( "

    //     }
    //     else {
    //         putere_incalzire_nr += "||"
    //     }

    //     putere_incalzire_nr += 'putere_incalzire_nr >= 71 && putere_incalzire_nr<=80'

    // }
    if (checkboxîncălzire81_90.checked) {
        if (putere_incalzire_nr.length <= 0) {
            putere_incalzire_nr += "&& ( "

        }
        else {
            putere_incalzire_nr += "||"
        }

        putere_incalzire_nr += 'putere_incalzire_nr >= 81 && putere_incalzire_nr<=90'

    }
    if (checkboxîncălzire91_100.checked) {
        if (putere_incalzire_nr.length <= 0) {
            putere_incalzire_nr += "&& ( "

        }
        else {
            putere_incalzire_nr += "||"
        }

        putere_incalzire_nr += 'putere_incalzire_nr >= 91 && putere_incalzire_nr<=100'

    }
    if (checkboxîncălzire100.checked) {
        if (putere_incalzire_nr.length <= 0) {
            putere_incalzire_nr += "&& ( "

        }
        else {
            putere_incalzire_nr += "||"
        }

        putere_incalzire_nr += 'putere_incalzire_nr >= 101'

    }

    if (putere_incalzire_nr.length > 0) {
        putere_incalzire_nr += ")"
        filtre += putere_incalzire_nr
    }
    // filtre += ")"

    let putere_ACM_nr = ""
    let checkboxACM10 = document.getElementById("checkboxACM10")
    let checkboxACM11_20 = document.getElementById("checkboxACM11_20")
    let checkboxACM21_30 = document.getElementById("checkboxACM21_30")
    let checkboxACM31_40 = document.getElementById("checkboxACM31_40")
    let checkboxACM41_50 = document.getElementById("checkboxACM41_50")
    let checkboxACM51_60 = document.getElementById("checkboxACM51_60")
    let checkboxACM61_70 = document.getElementById("checkboxACM61_70")
    // let checkboxACM71_80 = document.getElementById("checkboxACM71_80")
    let checkboxACM81_90 = document.getElementById("checkboxACM81_90")
    let checkboxACM91_100 = document.getElementById("checkboxACM91_100")
    let checkboxACM100 = document.getElementById("checkboxACM100")

    if (checkboxACM10.checked) {
        putere_ACM_nr += "&&("
        putere_ACM_nr += `putere_ACM_nr <= 10`
    }
    if (checkboxACM11_20.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "
        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 11 && putere_ACM_nr<=20'
    }
    if (checkboxACM21_30.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 21 && putere_ACM_nr<=30'

    }
    if (checkboxACM31_40.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 31 && putere_ACM_nr<=40'

    }
    if (checkboxACM41_50.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 41 && putere_ACM_nr<=50'

    }
    if (checkboxACM51_60.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 51 && putere_ACM_nr<=60'

    }
    if (checkboxACM61_70.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 61 && putere_ACM_nr<=70'

    }
    // if (checkboxACM71_80.checked) {
    //     if (putere_ACM_nr.length <= 0) {
    //         putere_ACM_nr += "&& ( "

    //     }
    //     else {
    //         putere_ACM_nr += "||"
    //     }

    //     putere_ACM_nr += 'putere_ACM_nr >= 71 && putere_ACM_nr<=80'

    // }
    if (checkboxACM91_100.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 81 && putere_ACM_nr<=90'

    }
    if (checkboxîncălzire91_100.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 91 && putere_ACM_nr<=100'

    }
    if (checkboxACM100.checked) {
        if (putere_ACM_nr.length <= 0) {
            putere_ACM_nr += "&& ( "

        }
        else {
            putere_ACM_nr += "||"
        }

        putere_ACM_nr += 'putere_ACM_nr >= 101'

    }

    if (putere_ACM_nr.length > 0) {
        putere_ACM_nr += ")"
        filtre += putere_ACM_nr
    }

    let tip_combustibil = ""
    let checkboxgaz = document.getElementById("checkboxgaz")
    let checkboxcurentelectric = document.getElementById("checkboxcurentelectric")
    if (checkboxgaz.checked) {
        tip_combustibil += "&& ( "
        tip_combustibil += `tip_combustibil ~ "gaz"`
    }
    if (checkboxcurentelectric.checked) {
        if (tip_combustibil.length <= 0) {
            tip_combustibil += "&& ( "

        }
        else {
            tip_combustibil += "||"
        }

        tip_combustibil += `tip_combustibil ~ "curent electric"`

    }
    if (tip_combustibil.length > 0) {
        tip_combustibil += ")"
        filtre += tip_combustibil
    }
    filtre += ")"

    console.log(filtre)
    let cerere = axios.get(`http://127.0.0.1:8090/api/collections/centrale/records`, {
        params: {
            filter: filtre,
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
            // console.log(`${nume} ${pret} ${stoc}`)
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
            // poza.src = `SITE\date site\Site Contcare\Produse` + data['imagine']
            nume1.textContent += nume;
            pret1.textContent += pret + " RON ";
            stoc1.checked = (stoc == "true");
            let favorite = document.createElement("input");
            favorite.type = "button";
            favorite.value = "\uf004";
            // favorite.style = "font-family: FontAwesome; background: transparent; border: 0;"
            favorite.id = data["id"]
            favorite.onclick = () => adaugalafavorite(data["id"]);
            favorite.className = "favorite";
            if (checkCookieExistence(favorite.id)) {
                favorite.classList.add("fundal-rosu")  
            }

            let linkpoza = document.createElement("a")
            linkpoza.href = "/produs.html?id=" + data["id"]
            linkpoza.appendChild(poza)
            centrala.appendChild(favorite);
            centrala.appendChild(linkpoza);
            // centrala.appendChild(stoc1);
            maindiv.appendChild(centrala);
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
    let cautare = document.getElementById("baracautare").addEventListener('keypress', clickPress)
    // let checkboxtoate = document.getElementById("checkboxtoate").addEventListener('change', schimba)
    let checkboxbaxi = document.getElementById("checkboxbaxi").addEventListener('change', schimba)
    let checkboxberetta = document.getElementById("checkboxberetta").addEventListener('change', schimba)
    let checkboxbosch = document.getElementById("checkboxbosch").addEventListener('change', schimba)
    let checkboxbuderus = document.getElementById("checkboxbuderus").addEventListener('change', schimba)
    let checkboxdedietrich = document.getElementById("checkboxdedietrich").addEventListener('change', schimba)
    let checkboxgaz = document.getElementById("checkboxgaz").addEventListener('change', schimba)
    let checkboxcurentelectric = document.getElementById("checkboxcurentelectric").addEventListener('change', schimba)
    let checkboxîncălzire10 = document.getElementById("checkboxîncălzire10").addEventListener('change', schimba)
    let checkboxîncălzire11_20 = document.getElementById("checkboxîncălzire11_20").addEventListener('change', schimba)
    let checkboxîncălzire21_30 = document.getElementById("checkboxîncălzire21_30").addEventListener('change', schimba)
    let checkboxîncălzire31_40 = document.getElementById("checkboxîncălzire31_40").addEventListener('change', schimba)
    let checkboxîncălzire41_50 = document.getElementById("checkboxîncălzire41_50").addEventListener('change', schimba)
    let checkboxîncălzire51_60 = document.getElementById("checkboxîncălzire51_60").addEventListener('change', schimba)
    let checkboxîncălzire61_70 = document.getElementById("checkboxîncălzire61_70").addEventListener('change', schimba)
    // let checkboxîncălzire71_80 = document.getElementById("checkboxîncălzire71_80").addEventListener('change', schimba)
    let checkboxîncălzire81_90 = document.getElementById("checkboxîncălzire81_90").addEventListener('change', schimba)
    let checkboxîncălzire91_100 = document.getElementById("checkboxîncălzire91_100").addEventListener('change', schimba)
    let checkboxîncălzire100 = document.getElementById("checkboxîncălzire100").addEventListener('change', schimba)
    let checkboxACM10 = document.getElementById("checkboxACM10").addEventListener('change', schimba)
    let checkboxACM11_20 = document.getElementById("checkboxACM11_20").addEventListener('change', schimba)
    let checkboxACM21_30 = document.getElementById("checkboxACM21_30").addEventListener('change', schimba)
    let checkboxACM31_40 = document.getElementById("checkboxACM31_40").addEventListener('change', schimba)
    let checkboxACM41_50 = document.getElementById("checkboxACM41_50").addEventListener('change', schimba)
    let checkboxACM51_60 = document.getElementById("checkboxACM51_60").addEventListener('change', schimba)
    let checkboxACM61_70 = document.getElementById("checkboxACM61_70").addEventListener('change', schimba)
    // let checkboxACM71_80 = document.getElementById("checkboxACM71_80").addEventListener('change', schimba)
    let checkboxACM81_90 = document.getElementById("checkboxACM81_90").addEventListener('change', schimba)
    let checkboxACM91_100 = document.getElementById("checkboxACM91_100").addEventListener('change', schimba)
    let checkboxACM100 = document.getElementById("checkboxACM100").addEventListener('change', schimba)
    fct1()
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

function adaugalafavorite(id) {
    let centrala = document.getElementById(id)
    if (!checkCookieExistence(id)) {
        document.cookie = `${id} = 1`
        centrala.classList.add("fundal-rosu")  
    }
    else {
        document.cookie = `${id} = ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
        centrala.classList.remove("fundal-rosu")
        
    }
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
