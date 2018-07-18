/*
Exercício 1

Usuário insere sua idade quanto ganha e quanto quer de empréstimo. Aceitar empréstimo se: 

1 - idade for maior que 21 e menor que 55
2 - o valor a ser emprestado não pode ser maior que 10 vezes o seu salário.*/

function ex1(){
    var idade = prompt("Digite sua idade")
    var salario = prompt("Digite seu salário")
    var debit = prompt("Digite quanto quer de empréstimo")

    var salmax = (salario * 10)

    if ((idade >= 21) && (idade <= 55) && (debit < salmax) ){
            alert("Empréstimo Aceito");
        }
        else{
            alert("Empréstimo Negado");
    }
}

// A ideia do exercicio 2 é imprimir a matriz da array matrix.

// function ex2(){
//     var matrix = [[1,2],[3,4],[5,6];[7,8]];
//     var str = ""; /*String vazia*/

//     for(var i=0;i < matrix.length; i++){
//         for(var j=0; j < matrix[i].length; j++){
//             str = str + " " + matrix[i][j];
//         }
//         console.log(str); /*Imprimir no console do navegador*/
//         str = "";
//     }
// }

//nota: NÃO FUNCIONOU - ENTENDER O MOTIVO

// Jogo da escadinha
// Pedir o tamanho da escada para o usuario, e imprimir uma escada.

function ex2(){

var degraus = parseFloat(prompt("Altura da Escada"));
var material = prompt("Material da escada");
var degraus = "";

for (var i=0; i < degraus; i++){
    console.log(degraus = degraus + material);
}
}