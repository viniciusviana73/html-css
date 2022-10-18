let count = 1

function clicou(){
    saida = document.querySelector('div#saida')
    saida.innerHTML += `<p>Você clicou pela ${count}º vez!</p>`
    count++
}