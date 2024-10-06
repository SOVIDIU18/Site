function getLeadingNumbers(str) {
    const result = str.match(/^\d{1,3}/);
    return result ? result[0] : null;
}
function update() {
    let cerere = axios.get(`https://baza-de-date.pockethost.io/api/collections/centrale/records`, {
        params: {
            perPage: 100
        }
    }).then(function (response) {
        let i = 0
        for (i = 0; i < response.data["totalItems"]; i++) {
            let data = response.data["items"][i]
            let putere = data["putere_ACM"]
            let numar = getLeadingNumbers(putere)
            const param = {
                "putere_ACM_nr": Number(numar)
            }
            let cerere = axios.patch(`https://baza-de-date.pockethost.io/api/collections/centrale/records/${data["id"]}`
                , param).then(function (response2) {
                    console.log(response2.status)
                    // console.log(`am updatat ${data["nume"]}`)
                })
        }
        console.log(i)
    })
}