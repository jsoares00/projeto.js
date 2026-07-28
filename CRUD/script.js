const carros=[]

function cadastrarCarro(){
    const novoCar = {
    nome: document.getElementById('input-nome').value,
    ano: Number(document.getElementById("input-ano").value),
    cor: document.getElementById("input-cor").value,
    custo: Number(document.getElementById("input-custo").value),
    placa: document.getElementById('input-placa').value,
    }
carros.push(novoCar)

console.log(carros)

limparFormulario()
mostrarTodos()
}
function limparFormulario() {
    document.getElementById('input-nome').value = ''
    document.getElementById('input-ano').value = ''
    document.getElementById('input-cor').value = ''
    document.getElementById('input-custo').value = ''
    document.getElementById('input-placa').value = ''

    document.getElementById('input-nome').focus()
}
function mostrarTodos(){
    document.getElementById('painel-Resultado').innerHTML = '' 

    for(let i=0; i<carros.length; i++){
        document.getElementById('painel-Resultado').innerHTML += 
        `<div>
            <h2>${carros[i].nome}</h2>
            <p>ano: ${carros[i].ano}</p>
            <p>Cor: ${carros[i].cor}</p>
            <p>Custo: ${carros[i].custo}</p>
            <p>Placa: ${carros[i].placa}</p>
        </div>
        ` 
    }
}
function retirarCarro(){
    let placa = document.getElementById('input-placa').value

    for(let i = 0; i<carros.length; i++){
        if(placa == carros[i].placa ){
            console.log(carros[i]);
            carros.splice(i, 1)
            console.log(i);
        }
    }
    mostrarTodos()
    limparFormulario()
}
function pesquisar(){
    let placa = document.getElementById('input-placa').value

    for(let i = 0; i<carros.length; i++){
        if(placa == carros[i].placa ){
            console.log(carros[i]);
document.getElementById('painel-Resultado').innerHTML += 
        `<div>
            <h2>${carros[i].nome}</h2>
            <p>ano: ${carros[i].ano}</p>
            <p>Cor: ${carros[i].cor}</p>
            <p>Custo: ${carros[i].custo}</p>
            <p>Placa: ${carros[i].placa}</p>
        </div>
        ` 
        }
    }
}
/*function testar(){
     carros = [
    {
        id: 1718324500001,
        carro: "Honda Civic",
        ano: 2022,
        cor: "Prata",
        divida: 0,
        placa: "ABC1D23"
    },
    {
        id: 1718324500002,
        carro: "Toyota Corolla",
        ano: 2021,
        cor: "Branco",
        divida: 12500,
        placa: "EFG4H56"
    },
    {
        id: 1718324500003,
        carro: "Chevrolet Onix",
        ano: 2023,
        cor: "Preto",
        divida: 3500,
        placa: "IJK7L89"
    },
    {
        id: 1718324500004,
        carro: "Volkswagen Gol",
        ano: 2019,
        cor: "Vermelho",
        divida: 8900,
        placa: "MNO2P34"
    },
    {
        id: 1718324500005,
        carro: "Ford Ranger",
        ano: 2024,
        cor: "Azul",
        divida: 0,
        placa: "QRS5T67"
    }
];
console.log(carros)

mostrarTodos()
}*/
