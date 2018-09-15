// var num:number=4;
// function square(num:number):void{
//     console.log(num*num);
// }
// square(name);
// function buildName(firstName: string, lastName: string = "joshi"): string {
//     return firstName + " " + lastName
//         ;
// }
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "joshi"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var firstName = buildName("apoorva");
console.log(firstName);
var firstName = buildName("pratek", "lastName");
console.log(firstName);
