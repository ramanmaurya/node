class Human{

    name:string;
    age:number;
    hobbies:string[];

    constructor(name:string,age:number,hobbies:string[]){
        this.name=name;
        this.age=age;
        this.hobbies=hobbies;
    }

    sayAge(){
        console.log(`this agen is ${this.age}`);
    }
    showhobbies(){
        console.log(`this is may hobbies ${this.hobbies}`)
    }
}
var HumanOb=new Human('Approve',22,["crickter","reading","travelling"]);

HumanOb.sayAge();
HumanOb.showhobbies();                      