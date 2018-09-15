class Person{
constructor(name,age,city,add,mob){
    this.name=name;
    this.age=age;
    this.city=city;
    this.add=add;
    this.mob=mob;

}
cage(){
     return new Date().getFullYear()-this.age;

}
}

  var data=  new Person('Raman',22,'jalandhar','btm',8485849);
  console.log(data);
console.log(data.cage()) ;

class newPerson extends Person{
    constructor(name,age,city,add,mob,medal,ranking){
     
        super(name,age,city,add,mob)
        this.medal = medal;
        this.ranking = ranking;
        
    }

}

const Newdata= new newPerson('rhoit',23,'jal','bawa khel',343445,10,3)
console.log(Newdata);