
await setInterval(test, 1000);
async function test(){
    await fetch('post','http://10.43.101.15:8080/ajouterTrajetVoiture', {
        body: {
            distance: "22",
            ""
        }
    }).then(async response => {
        console.log(response.json().);
    })
}