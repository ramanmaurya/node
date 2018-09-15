class Daviet {
    public name: string;
    public readonly location:string;
    constructor(colName:string,colLocation:string){
        this.name=colName;
        this.location=colLocation;

    }
}
let ob= new Daviet("daviet","jalandhar")

console.log(ob.location)