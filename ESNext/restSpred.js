// operador... rest(juntar) Spresd (espalhar)
// udar rest com parâmetro de função

// usar spred com objeto
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}

console.log(clone)

//usar spred com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)