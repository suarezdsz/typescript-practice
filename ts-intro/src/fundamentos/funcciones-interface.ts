

let habilidad:string[] = ['Angular', 'Flutter', 'Laravel', 'NodeJS'];

interface PersonaOL {
    codigo: number,
    nombre: string,
    apellido: string,
    documento: string,
    activo: boolean,
    habilidades: string[],
    mostrarStatus: (a: boolean)=> void
}

function showStatus(){
    console.log(0)
}

const personOL: PersonaOL = {

    codigo: 1,
    nombre: 'Daniel',
    apellido: 'Suarez',
    documento: 'V-26132857',
    activo: true,
    habilidades: habilidad,
    mostrarStatus: ()=>{  console.log(0)}
}


function isStatus(persona: Persona, status: boolean){
    persona.activo = status;
    console.log(persona);
}

isStatus(personOL, false);

