function interViewQuestion(job){
if(job==='teacher'){
     return function(name){
         console.log(`hello  I am ${name}  at the time i am a student i lean the mean stack development right know`)
     }
} else if (job === 'designer'){
    return function(name){
        console.log(`helloo my name is ${name} how are you guys, at the timing i injoy my life`)
    }
}else{
    console.log(`${name}what are you doing guys`)
}
}

var teacherQuestion= interViewQuestion('teacher');
teacherQuestion('Raman');
var designerQuestion=interViewQuestion('designer');
designerQuestion('bhuvi');