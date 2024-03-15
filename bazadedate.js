function fct1() {
    let pretmin = 0
    let pretmax = 1000
    let cerere = axios.get(`http://127.0.0.1:8090/api/collections/centrale/records`,{params: {
        filter: `pret< ${pretmax} && pret> ${pretmin} && stoc=true && (producator=Baxi || producator=Bosch)`
      }}).then(function (response) {
        console.log(response.data)
    for(let i=0;i<response.data["totalItems"];i++){
    let data = response.data["items"][i]
    let nume = data["nume"]
    let pret = data["pret"]
    let stoc = data["stoc"]
    console.log(`${nume} ${pret} ${stoc}`)
    }
        // document.body.append(nume1[])
    })
}
