// first method for create a oject is the constructor method.....


var Person = function(name,age,height,birth){
    this.name=name;
    this.age=age;
    this.height=height;
    this.birth=birth;
    this.calage = function () {
        console.log(2018 - this.birth)

    };


  
};

var Raman = new Person('Raman', 23, 5.4, 1995);
console.log(Raman);

// secont method protoype method for the creating the object

var Person = function (name, age, height, birth) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.birth = birth;

};

Person.prototype.calage=function(){
    console.log(2018 - this.birth)

};


var Ashu=new Person("ashish", 23,5.7,1995);

console.log(Ashu);

// console.log(`the age of the person is ::${calage} `);
Raman.calage();



// third method is object.create method for thecreating the object
 var personPro={
    calulate: function(){
console.log(2018-this.yob)
     }
 }


 var johan=Object.create(personPro);

 johan.name="Raman";
 johan.job="fresher";
 johan.edu="mca";
 johan.native="jalandhar";
 johan.yob=1995;


 console.log(johan);
 


var dataPro={
    YearofBith:function(){
        console.log(2018-this.age);

    }
};


var Raman=Object.create(dataPro);

Raman.name="Raman maurya";
Raman.job="fresher";
Raman.navtive="jalandhar";
Raman.pg="mca";
Raman.height="5.4";
Raman.age=23;


console.log(Raman);

// literal method for the creating the object 
var data={
    name:"raman",
    lastName:"maurya",
    age:23,
    Height:5.4,
    education:"post-graducation"
};

console.log(data)


// other method for creating the object

var PersonData={}
PersonData.name="Raman";
PersonData.age =23,

PersonData.height =5.4,
PersonData.dob = 1995,
PersonData.native ="jalandhar";

console.log(PersonData);


// default object method
 var ob=Object();

 ob.name="Raman",
 ob.lastName="Maurya",
 ob.height=5.4,
 ob.age=25

console.log(ob.name+"  "+ob.lastName);

