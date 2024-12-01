const pocketbase = new PocketBase('https://baza-de-date.pockethost.io');
async function adaugafavorite(id,num){
    // const record = await pb.collection('centrale').getOne('1o0btjmnzezxjdt');
    // console.log (record)
    let cerere = await axios.get(`https://baza-de-date.pockethost.io/api/collections/centrale/records/${id}`)
    if(cerere.status !== 200)return;
    const data=cerere.data;
    let poza=document.createElement("img")
    poza.src = `https://baza-de-date.pockethost.io/api/files/centrale/${data["id"]}/${data["imagine"]}`
    let nume1 = document.createElement("a");
    nume1.className = "text"
    nume1.href = "/produs.html?id=" + data["id"]
    nume1.innerText=data["nume"]
    let pret1 = document.createElement("p");
    pret1.className = "pret"
    pret1.innerText=data["pret"]
    let div=document.getElementById(`recomandare${num}`)
    let linkpoza = document.createElement("a")
    linkpoza.href = "/produs.html?id=" + data["id"]
    linkpoza.appendChild(poza)
    div.append(linkpoza)
    div.append(nume1)
    div.append(pret1)
    
    

}
document.addEventListener("DOMContentLoaded", function() {
    adaugafavorite("1o0btjmnzezxjdt",1);
    adaugafavorite("4md7cj5o8tt9rrg",2);
    adaugafavorite("deqra64qk391rah",3);
    adaugafavorite("6ukg687n64mfsr0",4);
    adaugafavorite("3rfs5c6xr65wlkk",5);
  });