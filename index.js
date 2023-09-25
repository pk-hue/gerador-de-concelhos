const conselhos = document.getElementById('conselho')
const conselhoId = document.getElementById('conselho-id')

async function criarconselho(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const conselhoPronto = await response.json()
    return conselhoPronto
}

async function mostrarData(){
    const data = await criarconselho()
    const conselhoText = `"${data.slip.advice}"`;
    const conselhoIde = `ADVICE # ${data.slip.id}`
    conselhos.innerHTML = conselhoText
    conselhoId.innerHTML = conselhoIde
}
document.getElementById('btn').addEventListener('click', ()=> {mostrarData()});