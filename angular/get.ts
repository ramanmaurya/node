class ZenStudent{
    private _name:string;
    constructor(name:string){
        this._name=name;
    }
    public get studentName():string{
        let colonIndex=this._name.indexOf(":")
        let safeName = this._name.substr(colonIndex);
        return safeName;
    }
    public set studentName(value:String){
        this._name=value;
    }
}

let p = new ZenStudent('9653167607:Sumit kholi');
console.log(p.studentName);
console.log(p.studentName);
console.log(p.studentName);
 console.log(p.studentName);
