const populate = async (currency, value) => {
    let myStr = ""
    URL = "https://api.currencyapi.com/v3/latest?apikey=YourKey&base_currency=" + currency;
    let response = await fetch(URL)
    let rjson = await response.json()
    document.querySelector(".output").style.display = "block"
    for (let key of Object.keys(rjson['data'])) {
        myStr += `<tr>
                <td>${key}</td>
                <td>${rjson["data"][key]["code"]}</td>
                <td>${Math.round(rjson["data"][key]["value"] * value)}</td>
            </tr>`
    }
    const tableBody = document.querySelector("tbody")
    tableBody.innerHTML = myStr
}

const btn = document.querySelector(".btn")
btn.addEventListener('click', (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const currency = document.querySelector("select[name='currency']").value
    populate(currency, value)
    // e.preventDefault()
    // const value = parseInt(document.querySelector("input[name='quantity']").value);
    // const currency = document.querySelector("select[name='currency']").value
    // populate(value, currency)
})

