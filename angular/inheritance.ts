class Animal{
    name:string;
    constructor(theName:string){this.name=theName}
    move(distanceInMeter:number=0){
        console.log(`${this.name} move the ${distanceInMeter} meters`);
    }
}

class snake extends Animal{
    constructor(name:string){super(name);}
    move(distanceInMeter=5){
        console.log("slithering....");
        super.move(distanceInMeter);

    }
}
class Horse extends Animal{
    constructor(name:string){super(name);}
    move(distanceInMeter=45){
        console.log("galloping....");
        super.move(distanceInMeter);
    }
}

let sam: snake = new snake("Sammy the Python");
let tom: Animal=new Horse("Tommy the paloomina")
sam.move();