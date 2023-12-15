//calculadora  de partidas Rankeadas
const partidas= require('prompt-sync')({sigint:true});

let vitorias =parseInt(partidas("Escreva o número de vitórias"));
let derrotas =parseInt(partidas("Escreva o número de derrotas"));
let saldoVitorias=calcular(vitorias,derrotas);
let nivelJogador=nivel(saldoVitorias);

console.log(`O saldo de vitórias do Herói é ${saldoVitorias} e ele está no Nível de ${nivelJogador}`)

function calcular(numV,numD){
    let saldo = numV-numD
    return saldo
}
 function nivel(ranck){
    if (ranck<= 10){
        return "Ferro"
    }else if(ranck>=11 && ranck<=20){
        return "Bronze"
    }else if(ranck>=21 && ranck<=50){
        return "Prata"
    }else if(ranck>=51 && ranck<=80){
        return "Ouro"
    }else if(ranck>=81 && ranck<=90){
        return "Diamante"
    }else if(ranck>=91 && ranck<=100){
        return "Lendário"
    }else{
        return "Imortal"
    }
 }
