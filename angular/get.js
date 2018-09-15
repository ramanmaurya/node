class ZenStudent {
    constructor(name) {
        this._name = name;
    }
    get studentName() {
        let colonIndex = this._name.indexOf(":");
        let safeName = this._name.substr(colonIndex);
        return safeName;
    }
    set studentName(value) {
        this._name = value;
    }
}
let p = new ZenStudent('9653167607:Sumit kholi');
console.log(p.studentName);
console.log(p.studentName);
console.log(p.studentName);
console.log(p.studentName);
