function salvarDados(){
    localStorage.setItem('carros', JSON.stringify(carros))
}

function carregarDados(){
    carros = JSON.parse(localStorage.getItem('carros')) || []
}

let carros=[]

function cadastrarCarro(){
carregarDados()    

    const novoCar = {
    nome: document.getElementById('nome').value,
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
    document.getElementById('painel-Resultado').innerHTML = '' 

    for(let i=0; i<carros.length; i++){
        document.getElementById('painel-Resultado').innerHTML += 
        `<div>
            <h2>${carros[i].nome}</h2>
            <p>ano: ${carros[i].ano}</p>
            <p>Cor: ${carros[i].cor}</p>
            <p>Divida: R$${carros[i].custo}.tofixed(2)</p>
            <p>Placa: ${carros[i].placa}</p>
        </div>
        ` 
    }
}
function retirarCarro(){
    let placa = document.getElementById('pesquisa').value
    for(let i = 0; i<carros.length; i++){
        if(placa == carros[i].placa ){
            console.log(carros[i]);
            carros.splice(i, 1);
            console.log(i);
        }
    }
    salvarDados()
    mostrarTodos()
    limparFormulario()
    
}

function testar(){
 carregarDados()

    localStorage.setItem('teste', 45)

    let testeDeLeitura = localStorage.getItem('teste')
    console.log(testeDeLeitura);
     carros = [
    {
       
        carro: "Honda Civic",
        ano: 2022,
        cor: "Prata",
        divida: 0,
        placa: "ABC1D23"
    },
    {
        carro: "Toyota Corolla",
        ano: 2021,
        cor: "Branco",
        divida: 12500,
        placa: "EFG4H56"
    },
    {
        carro: "Chevrolet Onix",
        ano: 2023,
        cor: "Preto",
        divida: 3500,
        placa: "IJK7L89"
    },
    {
        carro: "Volkswagen Gol",
        ano: 2019,
        cor: "Vermelho",
        divida: 8900,
        placa: "MNO2P34"
    },
    {
        carro: "Ford Ranger",
        ano: 2024,
        cor: "Azul",
        divida: 0,
        placa: "QRS5T67"
    }
];
console.log(carros)

mostrarTodos()
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
