// function retierment(retirementAge){
//     var a ='year left until retierment';
//     return function(yearOfBirth){
//         var age= 2016-yearOfBirth;
//         console.log((retirementAge-age)+a);

//     }

// }

// var retiermentUS= retierment(66);
// retiermentUS(1990);
// retierment(66)(1990);
// retierment(45)(1997);

// var = retierment(45)(1997);
// console.log(`hello guys ${retierment(45)(1997)} is left for my retierment`);



// closures 2 program 

function interviewQuestion(job){
    return function(name){
        if(job==='designer'){
            console.log(`what kind of the designing you doing ${name}`)
        } else if(job==='teacher'){
            console.log(`what subject you teach ${name}`)
        }else{
            console.log(`what you do at the timing`)
        }


    }
}


interviewQuestion('teacher')('Raman');

var Raman={
    firstName:"Raman",
    lastName:"maurya",
    age:23,
    job:"designer",
    yearOfBirth:function(year){
        console.log(this.age-year);
    }
}

var Ashish={
    firstName:'ashish',
    lastName:'jamwal',
    age:23,
    job:'fresher'
}
//  var mybirth=Raman.yearOfBirth(2018);
//  console.log(mybirth);


Raman.yearOfBirth.call(Ashish);



// IIFE this function is call imijet invoke function


(function(){
    var score = Math.random()*10;
    console.log(score>=5);
})();
// console.log(score);
 // we can't acces the varible form the out side of the function scope .
//  so that is why when we accesing to print in the console then it throw the error is that the variable is not deifiend


(function (good) {
    var scope = Math.random() * 10;
    console.log(scope >= 5 -good);
})(8);

(function(){
    var scope= Math.random()*5;
    console.log(scope);
})();













