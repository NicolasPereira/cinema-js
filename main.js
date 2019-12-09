let valorTotal = 0
let totalCadeirasVendidas = 0
let totalCadeiras = 0
let mensagem = document.getElementById('informacaoVendas')
function tamanhoSala() {
    let fileiras = prompt('Digite quantas fileiras a sala possui:')
    let cadeiras = prompt('Digite quantas cadeiras cada fileira possui')
    totalCadeiras = fileiras * cadeiras
    desenhaSala(fileiras, cadeiras)
    atualizaInfo()
}

function desenhaSala(f, c) {
    let sala = document.querySelector('div#sala')
    let tabela = document.createElement('table')
    let tblBody = document.createElement('tbody')
    for(let i = 0; i < f; i++){
        let fileira = document.createElement('tr')
        for(let j = 0; j < c; j++){
            let cadeira = document.createElement('td')
            let img = document.createElement('img')
            cadeira.setAttribute('id', `${i}${j}`)
            cadeira.setAttribute('class','disponivel')
            img.setAttribute('id',`poltrona${i}${j}`)
            img.setAttribute('class',`poltrona`)
            img.src = 'img/poltronaGreen.png'
            cadeira.addEventListener("click",function(){
                selecionaCadeira(cadeira.id)
            })
            cadeira.appendChild(img)
            fileira.appendChild(cadeira)
        }
        tblBody.appendChild(fileira)
    }
    tabela.appendChild(tblBody)
    sala.appendChild(tabela)
}

function selecionaCadeira(id){
    let cadeiraSelecionada = document.getElementById(id);
    let poltronaImg = document.getElementById(`poltrona${id}`)
    if(cadeiraSelecionada.className == 'disponivel'){
        cadeiraSelecionada.setAttribute('class','indisponivel')
        poltronaImg.src = 'img/poltronaRed.png'
        compra()
    }else{
        let confirma = confirm('Você tem certeza que deseja cancelar a compra?')
            if(confirma == true){
                cancelaCompra()
                cadeiraSelecionada.setAttribute('class','disponivel')
                poltronaImg.src = 'img/poltronaGreen.png'
            }
        }
}

function compra(){
    valorTotal += 10.00
    totalCadeirasVendidas += 1
    atualizaInfo(valorTotal, totalCadeirasVendidas)
}

function cancelaCompra(){
    valorTotal -= 10.00
    totalCadeirasVendidas -= 1
    console.log(valorTotal)
    console.log(totalCadeirasVendidas)
    atualizaInfo(valorTotal, totalCadeirasVendidas)
}

function atualizaInfo(valor=0, cadeira=0){
    mensagem.innerHTML =  `<p>Total de Ingressos Disponiveis: ${totalCadeiras - cadeira}</p>`
    mensagem.innerHTML += `<p>Total de Valor Arrecadado: R$ ${valor}`
}