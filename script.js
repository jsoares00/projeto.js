function salvarDados(){
    localStorage.setItem('carros', JSON.stringify(carros))

    //salva o array no Local Storage
}

function carregarDados(){
    carros = JSON.parse(localStorage.getItem('carros')) || []
}

let carros=[]

function cadastrarCarro(){
carregarDados()    

    const novoCar = {
    nome: document.getElementByInomd('e').value,
    ano: Number(document.getElementById("ano").value),
    cor: document.getElementById("cor").value,
    custo: Number(document.getElementById("custo").value),
    placa: document.getElementById('placa').value,
    }
   
carros.push(novoCar)

console.log(carros)

salvarDados()
limparFormulario()
mostrarTodos()
}
function limparFormulario() {
    document.getElementById('nome').value = ''
    document.getElementById('ano').value = ''
    document.getElementById('cor').value = ''
    document.getElementById('custo').value = ''
    document.getElementById('placa').value = ''

}
function mostrarTodos(){
carregarDados()

    const painel = document.getElementById("painel-Resultado").innerHTML = ' '

    for(let i=0; i<carros.length; i++){
        document.getElementById('painel-Resultado').innerHTML += 
        `<div>
            <h2>${carros[i].nome}</h2>
            <p>ano: ${carros[i].ano}</p>
            <p>Cor: ${carros[i].cor}</p>
            <p>Divida: R$${carros[i].custo}</p>
            <p>Placa: ${carros[i].placa}</p>
        </div>
        ` 
    }
    document.getElementById('patio').innerHTML = carros.length
}
function retirarCarro(){
carregarDados()

    let placa = document.getElementById('pesquisa').value
    for(let i = 0; i<carros.length; i++){
        if(placa == carros[i].placa ){
            console.log(carros[i])
            carros.splice(i, 1)
        }
    }
    salvarDados()
    mostrarTodos()
    limparFormulario()
    
}
 
function pesquisar(){
    let placa = document.getElementById('pesquisa').value
    for(let i = 0; i<carros.length; i++){
        if(placa == carros[i].placa ){
           document.getElementById('resultadoPes').innerHTML = 
        `<div>
            <h2>${carros[i].nome}</h2>
            <p>ano: ${carros[i].ano}</p>
            <p>Cor: ${carros[i].cor}</p>
            <p>Divida: R$${carros[i].custo}</p>
            <p>Placa: ${carros[i].placa}</p>
        </div>
        ` 
        }
    }
}
function testar() {
carregarDados()
    carros.push(
        {
            nome: "Civic",
            ano: 2022,
            cor: "Preta",
            custo: 500,
            placa: "7FA7WS2"
        },
        {
            nome: "Corolla",
            ano: 2021,
            cor: "Prata",
            custo: 5000,
            placa: "7M4S1T2"
        },
        {
            nome: "Onix",
            ano: 2020,
            cor: "Branco",
            custo: 300,
            placa: "FH8S9G"
        },
        {
            nome: "Gol G3",
            ano: 2016,
            cor: "Preta",
            custo: 200,
            placa: "72DTE8"
        }
    )

    salvarDados()
    mostrarTodos()
}