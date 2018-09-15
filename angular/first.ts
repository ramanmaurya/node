// var num:number=4;
// function square(num:number):void{
//     console.log(num*num);
// }
// square(name);

// function buildName(firstName: string, lastName: string = "joshi"): string {
//     return firstName + " " + lastName
//         ;
// }

function buildName(firstName: string, lastName?: string = "joshi"): string {
   if(lastName)
   return firstName+ " " +lastName;
   else
   return firstName;
}

var firstName: string =buildName("apoorva");
console.log(firstName);

var firstName: string =buildName("pratek","lastName");
console.log(firstName);