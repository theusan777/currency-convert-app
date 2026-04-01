const amountInput = document.getElementById("amount")

const fromSelect = document.getElementById("currency-from")

const toSelect = document.getElementById("currency-to")

const convertBtn = document.getElementById("convert")

const result = document.getElementById("result")

const description = document.getElementById("description")

const fromFlag = document.getElementById("from-flag")

const toFlag = document.getElementById("to-flag")

const swapBtn = document.getElementById("swap")

const flags = {
USD: "./assets/flags/us.svg",
BRL: "./assets/flags/br.svg",
EUR: "./assets/flags/eu.svg",
GBP: "./assets/flags/gb.svg"
}

function formatInput(value){

value = value.replace(/\D/g,"")

value = (Number(value) / 100).toFixed(2)

value = value.replace(".",",")

value = value.replace(/\B(?=(\d{3})+(?!\d))/g,".")

return value

}

amountInput.addEventListener("input", e=>{

e.target.value = formatInput(e.target.value)

convert()

})

function updateFlags(){

fromFlag.src = flags[fromSelect.value]

toFlag.src = flags[toSelect.value]

if(fromSelect.value === toSelect.value){

toSelect.value = fromSelect.value === "USD" ? "BRL" : "USD"

toFlag.src = flags[toSelect.value]

}

convert()

}

fromSelect.addEventListener("change", updateFlags)

toSelect.addEventListener("change", updateFlags)

swapBtn.addEventListener("click", ()=>{

const temp = fromSelect.value

fromSelect.value = toSelect.value

toSelect.value = temp

updateFlags()

swapBtn.classList.add("rotate")

setTimeout(()=>{

swapBtn.classList.remove("rotate")

},400)

})

convertBtn.addEventListener("click", convert)

async function convert(){

const value = amountInput.value
.replace(/\./g,"")
.replace(",",".")
.replace(/[^\d.]/g,"")

if(!value){
return
}

const from = fromSelect.value

const to = toSelect.value

const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)

const data = await response.json()

const rate = data.rates[to]

const converted = value * rate

const formatted = converted.toLocaleString("pt-BR",{
style: "currency",
currency: to
})

result.textContent = formatted

description.textContent = `1 ${from} = ${rate.toFixed(2)} ${to}`

}