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
    adaugafavorite("yzfjx9kcdcmo3z9",1);
    adaugafavorite("jt6c56psa03e8te",2);
    adaugafavorite("i97bfizyd6hwwz6",3);
    adaugafavorite("m26zhwk7y1i5gks",4);
    adaugafavorite("ef9b5ahmoyu7gh4",5);
  });