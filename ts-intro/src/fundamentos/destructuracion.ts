
/**
 * ==== DESTRUCTORACION DE INTERFACES ======
 */

 interface Carro {
    codigo: number,
    marca: string,
    modelo: string,
    serial: string,
    fecha: Date,
    color: string
}

const ford: Carro = {
    codigo: 1,
    marca: 'Ford',
    modelo: 'Mustang',
    serial: 'A00150',
    fecha: new Date(17,10,1988),
    color: 'Negro'
}

const {modelo} = ford;

console.log('Modelo:  ',modelo);

/**
 * ====== DESTRUCTORACION DE ARREGLO ======
 */

const Cars: string[] = ['Mustang','Camaro','Shelby'];

const [c1, c2, c3] = Cars;

console.log('Cars ', c1);

/**
 * DESTRUCTORACION DE ARGUMENTOS ======
 */

