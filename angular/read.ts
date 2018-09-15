class Collage{
    public name:string;
    public readonly location:string;
    constructor(collName: string, colllocation:string){
        this.name=collName;
        this.location=colllocation;
    }
}

let ob= new Collage("asif","chennai");
console.log(ob.name);
console.log(ob.location);

// the line below will not let progaram compline.remove the line below to compile.
// ob.location="banglore"