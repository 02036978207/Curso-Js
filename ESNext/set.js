//não aceita repetição e não é indexada

const times = new Set()
times.add('vasco')
times.add('São Paulo').add('Paumeiras').add('Corinthias')
times.add('Flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('Vasco'))
console.log(times.has('Flamengo'))

const nomes = [ 'Raquel', 'Julia', 'Lucas', 'Lucas']
const nomesSet= new Set(nomes)
console.log(nomesSet)