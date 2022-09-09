console.log('Alterando DOM');

const edades = [31, 27, 18, 19, 18, 22, 22]

const nodoInicial = document.getElementById('root')

const titulo = document.createElement('h3')
titulo.innerText = 'Edades:'
nodoInicial.append(titulo)

edades.forEach( edad => {
    const li = document.createElement('li')
    li.innerText = edad
    nodoInicial.append( li )
})