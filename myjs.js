let apikey={
    key:'0fb510cd-6ec1-4a4d-87c6-ddc736cd8abd'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
apikey.key)
.then((res)=>{
    if(!res.ok) throw new Error('Erro ao executar a requisição, status ' + res.status);
    return res.json();
})
.then((api)=>{
    console.log(api);
    let texto ='';
    for(let i = 0  ; i < 10 ; i++){
        texto = texto + `
            <div class="media">
            <img src="coins.png" class="align-self-center mr-3" width="100" height="60">
            <div class="media-body">
                <h5 class="mt-2>${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
            </div>
            </div>
        `;
        document.getElementById("coins").innerHTML = texto;
    }
})
.catch((error) =>{
    console.error(error.message)
});