const express = require('express');
const app = express();

app.use(express.json())

app.get("/exercicio2/", (req, res) => {
    // http://localhost:3000/exercicio2/?valorHora=0&horasTrabalhadas=3
    const valorHora = Number(req.query.valorHora)
    const horasTrabalhadas = Number(req.query.horasTrabalhadas)

    const salario = valorHora * horasTrabalhadas;
    // res.status - status de retorno
    // res.json() - envio do retorno
    // res.send() - envio do retorno
    res.json({ resultado: salario })
})

app.post("/exercicio12/", (req, res) => {
    // http://localhost:3000/exercicio12
    const num = req.body.num
    
    if (num>0){
    	resultado = 'Este número é Positivo';
	}
	else if (num<0){
		resultado = 'Este número é Negativo';
	}
    const resultado = double(num);

    // informar um status diferente de 200 (pesquisar sobre 😊)
    res.status(201).json({ resultadoPost: resultado })
})


app.post("/exercicio24/", (req, res) => {
    // http://localhost:3000/exercicio24
    const {num, i} = req.body.num
    
    for(i=1; i<=10; i++){
	const resultado = num*i;
    }

    // informar um status diferente de 200 (pesquisar sobre 😊)
    res.status(201).json({ resultadoPost: resultado })
})

app.post("/exercicio15/", (req, res) => {
    // http://localhost:3000/exercicio1
    const { a, b, c } = req.body

    if ((a + b < c) || (a + c < b) || (b + c < a) ){
        resultado = 'Nao é um triangulo'
    } else if ((a == b) || (a == c)) {
        resultado = 'Equilatero'
    } else if ((a==b) || (a==c) || (b==c)) {
        resultado = 'Isósceles'
    } else {
        resultado = 'Escaleno'
    }

    // informar um status diferente de 200 (pesquisar sobre 😊)
    res.status(201).json({ resultado })
})

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})