function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve()
        }, tempo)
    })
}


esperarPor(2000)
    .then(() => console.log('Execuntando promise...'))
    .then(esperarPor)
    .then(() => console.log('Execuntando promise...'))
    .then(esperarPor)
    .then(() => console.log('Execuntando promise...'))

    async function executar(){
        await esperarPor(1500)
        console.log('Async/Await 1...')
        await esperarPor(1500)
        console.log('Async/Await 2...')
        await esperarPor(1500)
        console.log('Async/Await 3...')
    }

  