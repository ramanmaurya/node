// // var johan=['Ramam','mca','5.3','DAVIET',22, 'rdhawan.153@gmail.com'];
// // // for(  var i=0; i<johan.length; i++){
// // //     console.log(johan[i])
// // // }

// // var i=0;
// // while(i <= johan.length){
// //     console.log(johan);
// //     i++;
// // }

// // var bhuvi =['a','b','c','d'];
// // var bhuvi1 =[1,2,3,4,];


// // for( var i=0; i<=bhuvi.length-1; i++){
// //     console.log(bhuvi[i]);

// // }

// // for ( var i = bhuvi1.length-1 ; i >=0 ; i--) {
// //     console.log(bhuvi1[i]);

// // // };
// // var mark =[454,332,455,234,554,332]
// // var johan = [345, 567, 333, 210, 45]
// // var sum=0;
// // calavg = function ( t) {
// //     for(i=0;i<=mark.length-1;i++){
// //         sum +=mark[i];
// //         sum/5;
// //         console.log(sum)

// //     }
// // }

// // calavg();
// var john={
//     Name:'Ram bhavan',
//     bills:[133,68,43,232,43,342],
//     calTips:function(){
//         this.tips = [];
//         this.finalValue = [];
//         for(i=0; i<this.bills.length; i++){

//             let percentage;

//             var bill= this.bills[i];

//             if(bill < 50){
//                 percentage=.30;
//             } else if(bill > 50 && bill < 200){
//                 percentage =.15;

//             }else{
//              percentage= .10;
//             }
//             this.tips[i] = bill * percentage;
//             this.finalValue[i]= bill + bill * percentage;

//         }
    
//     }
// }
// function  calAvg(tips) {
//     var sum = 0;

//     for ( var i = 0; i < tips ; i++) {
//        sum= sum + tips[i];

//     }
//     return sum / tips;
// }
// john.calTips();
// calAvg()

// console.log(john);
//  var Ram ={
//      firstName: "Ramam",
//      lastName: "Maurya",
//      birthYear: 1996,
//      calculateAge: function(){
//          console.log(this);
//          console.log(2018-this.birthYear);
//      }
//  }
 
//  Ram.calculateAge();
// var myVar = 100;

// function WhoIsThis() {
//     var myVar = 200;

//    console.log("myVar = " + myVar); // 200
//     console.log("this.myVar = " + this.myVar); // 100
// }

// WhoIsThis();
// // console.log(myVar);
// var nbr =100;
//  function count(){
//      this.nbr=200;
//  }
// count();
// var nbr1= new count();
// console.log(nbr1
// );

// var Ram = {
//     Name:"Raman",
//     age: 23,
//     edu:'Mca',
//     height: 5.4,
//     birthYear: function(){
//         this.dob 
//         console.log(2018-this.age)
//     }

// }
// birthYear();

// // console.log(Ram);
// var scores, roundScores,activePlayer,dice;
// scores =[0,0];
// roundScores =0;
// activePlayer=0;
// dice = Math.floor(Math.random() * 6) + 1,
// dice1 = Math.pow(3,4); 



// // console.log(dice);
// document.querySelector('h1').textContent= dice;
// document.querySelector('h2').textContent =  dice1;

// document.querySelector('p').innerHTML= '<em>'+dice+'<em>'; 
// var x = document.querySelector('p').textContent;
// console.log(x);
// document.querySelector('p').style.display='none';
// var age = 23;

// var age=23;

// function foo() {

//     console.log(age);  // Why age is undefined

//     var age = 65;

//     console.log(age);

// }

// foo();

// console.log(age)


var Ram={
     name:'Raman',
     birthYear:1996,
     edu:'Mca',
     calculate:function(){
         this.age;
         console.log(2018-this.birthYear)
     }
}
 console.log(Ram);

 // create.object method

 var personPro={
     calculateAge:function(){
        return console.log(2018-this.yearOfBith);
     }
 };

 var john=Object.create(personPro);
 john.name='john';
 john.yearOfBith=1990;
 john.job='teacher';

 var jane=Object.create(personPro,{
     name:{value:'john'},
     yearOfBith:{value:1969},
     job:{value: 'desinger'}

 });




