const { Somar } = require("../controllers/exercicios");

class Serviceexercicios {
    Operacoes() {
        const result = {
            Operacoes: {
                Somar: "Soma dois números endpoint = /exercicio/soma",
                CalculaSalario: "Multiplica dois números endpoint = /exercicio/mult",
                Mult: "Multiplica dois números endpoint = /exercicio/mult",
            }
        }

        return result;
    }

    Somar(num1, num2){
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Insira um número válido!');
        }

        return Number(num1) + Number(num2);
    }

    CalculaSalario(num, i){
        if (isNaN(num) || isNaN(i)) {
            throw new Error('Insira um número válido!');
        }

        return Number(num) * Number(i);
    }

  
    Mult(num1, num2){
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Insira um número válido!');
        }

        return Number(num1) * Number(num2);
    }

    
}

module.exports = new Serviceexercicios();










// function somar(num1, num2) {
//     return Number(num1) + Number(num2);    
// }

// function calculaSalario(valorHora, horasTrabalhadas) {
//     return valorHora * horasTrabalhadas
// }

// // Primeira forma
// function verificaTriangulos(a, b, c) {
//     let resultado
//     if ((a + b < c) || (a + c < b) || (b + c < a) ){
//         resultado = 'Nao é um triangulo'
//     } else if ((a == b) || (a == c)) {
//         resultado = 'Equilatero'
//     } else if ((a==b) || (a==c) || (b==c)) {
//         resultado = 'Isósceles'
//     } else {
//         resultado = 'Escaleno'
//     }

//     return resultado
// }

// // Segunda forma
// function verificaTriangulos2(a, b, c) {
//     if ((a + b < c) || (a + c < b) || (b + c < a) ){
//         return 'Nao é um triangulo'
//     } else if ((a == b) || (a == c)) {
//         return 'Equilatero'
//     } else if ((a==b) || (a==c) || (b==c)) {
//         return 'Isósceles'
//     } else {
//         return 'Escaleno'
//     }
// }

// // module.exports = somar // Exportando default, uma unica função
// module.exports = { somar, calculaSalario, verificaTriangulos2 }