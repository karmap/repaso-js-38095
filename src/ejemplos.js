console.log('Hola mundo desde JS');

// var -> no lo vamos a utilizar en React
// scope

let nombre = 'Jorge'
const apellido = 'García'

nombre = 'Diego'
// apellido = 'López'

console.log(nombre, apellido);

// function saludar ( nombre ) {
//     const saludo = `hola ${nombre}, bienvenido`
//     console.log(saludo);
// }

const saludar = nombre => {
    const saludo = `hola ${nombre}, bienvenido`
    console.log(saludo);
}

saludar( 'Adrian' )
saludar( 'Diego' )
saludar( 'Lucia' )

// const alCubo = numero => { return numero**3 }
const alCubo = n => n**3

console.log( alCubo(5) );
console.log( alCubo(27) );
console.log( alCubo(99) );

const edad = 16

// if ( edad > 18) {
//     console.log('ya puedes tomar');
// } else {
//     console.log('todavía no');
// }

edad > 18 ? console.log('ya puedes tomar') : console.log('todavía no');

const usuario = {
    nombre: 'Ana',
    apellido: 'Perez',
    edad: 21
}

console.log( usuario );

// saludar( JSON.stringify(usuario) )

// const imprimeUsuario = usuario => {
//     const { nombre, apellido, edad } = usuario
//     console.log(`Hola ${nombre} ${apellido}`);
//     console.log(`Tienes ${edad} años`);
// }

const imprimeUsuario = ( { nombre, apellido, edad } ) => {
    console.log(`Hola ${nombre} ${apellido}`);
    console.log(`Tienes ${edad} años`);
}

imprimeUsuario( usuario )

const edades = [31, 27, 18, 19, 18, 22, 22]

const [edadBruno, edadJuan] = edades
console.log( edadBruno, edadJuan );

// const nuevasEdades = [ ...edades , 29, 35]
const nuevasEdades = [ 29,  ...edades ,35]
console.log( nuevasEdades );


const usuarioComplejo = {
    nombre: 'Lucia',
    apellido: 'Mendez',
    edad: 35,
    habilidades: {
        actriz: true,
        cantante: true,
        bailarina: false
    }
}

// desestructurar habilidades

const { habilidades: {actriz: ac, cantante: ca, bailarina: ba} } = usuarioComplejo

console.log( 'actriz', ac );
console.log( 'cantante', ca );
console.log( 'bailarina', ba);