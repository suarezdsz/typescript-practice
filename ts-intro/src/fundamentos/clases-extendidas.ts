
class PersonaNormal{

    constructor(
        public nombre: string,
        public edad: number
    ){}
}

class Hereo extends PersonaNormal{
    constructor(
        public namespace: string
    ){
        super('Peter Parker', 32)
    } 
}