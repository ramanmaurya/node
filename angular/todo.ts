class student{
    fullName:string;
    private password:string='haha';
    constructor(public firstName, public middleName, public lastName){
this.fullName=firstName+" "+middleName+" "+lastName;
    }

    public getName():string{
        alert(this.password);
        return this.firstName+this.middleName+this.lastName;

    }
}
let studentOb =new student("smith","bob","johnson")
studentOb.getName();
// this will throw error;
//alert(studentOb.password)
alert(studentOb.fullName)