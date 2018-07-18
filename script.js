/*
Exercício 1

Usuário insere sua idade quanto ganha e quanto quer de empréstimo. Aceitar empréstimo se: 

1 - idade for maior que 21 e menor que 55
2 - o valor a ser emprestado não pode ser maior que 10 vezes o seu salário.*/

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

