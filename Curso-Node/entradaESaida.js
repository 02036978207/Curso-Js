const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fla Anonimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('Data', dat => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}