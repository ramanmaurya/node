class Person{
    protected name:string;
    constructor(name:string){this.name=name}
}
class Employes extends Person{
    private department:string;
    constructor(name:string,department:string){
        super(name);
        this.department=department;

    }
    public getElevatorPitch() {
        return `Hello,my name is ${this.name} and i work is ${this.department}`;
    }
}



let howard= new Employes("howard","sales");
console.log(howard.getElevatorPitch())