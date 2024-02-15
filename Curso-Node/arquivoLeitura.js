const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err,arquivos) =>{
    console.log('conteudo da pasta...')
    console.log(arquivos)
})