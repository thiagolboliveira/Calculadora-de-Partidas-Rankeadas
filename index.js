// Função para calcular a classificação de um jogador com base em vitórias e derrotas
function calcularRank(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas
    let nivel

    if (vitorias < 10) {
            nivel = "Ferro";
    } 
        else if (vitorias >= 11 && vitorias <= 20) {
            nivel = "Bronze";
    } 
        else if (vitorias >= 21 && vitorias <= 50) {
            nivel = "Prata";
    } 
        else if (vitorias >= 51 && vitorias <= 80) {
            nivel = "Ouro";
    } 
        else if (vitorias >= 81 && vitorias <= 90) {
            nivel = "Diamante";
    } 
        else if (vitorias >= 91 && vitorias <= 100) {
            nivel = "Lendário";
    } 
        else if (vitorias >= 101) {
            nivel = "Imortal";
    }
    
    // Devolva a classificação e o saldo das vitórias
    return { saldoVitorias, nivel }
}

// Exemplo usado:
const vitorias = 97 // Exemplo de número de vitórias
const derrotas = 16 // Exemplo de número de derrotas

// Chame a função e armazene o resultado em uma variável
const resultado = calcularRank(vitorias, derrotas)

// Exiba a mensagem com a classificação e saldo das vitórias
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`)