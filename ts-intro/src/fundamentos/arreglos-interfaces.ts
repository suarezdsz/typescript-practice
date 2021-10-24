

/**
 * Arreglos
 */

 let habilitades:string[] = ['Angular', 'Flutter', 'Laravel', 'NodeJS'];


 interface Persona {
     codigo: number,
     nombre: string,
     apellido: string,
     documento: string,
     activo: boolean,
     habilidades: string[]
 }
 const persona: Persona = {
     codigo: 1,
     nombre: 'Daniel',
     apellido: 'Suarez',
     documento: 'V-26132857',
     activo: true,
     habilidades: habilitades
 }
 
 console.log(persona);