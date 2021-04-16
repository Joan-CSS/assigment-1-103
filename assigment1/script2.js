var name ='Joan';
var email ='joan.gradillas18@tectijuana.edu.mx';
var password ='*******';
var age='22';
var country ='Mexico';
var salarymonthly ='7200';

console.log(name);
console.log(email);
console.log(password);
console.log(age);
console.log(country);
console.log(salarymonthly);
/* se tiene que crear en console */
//for loop 
console.time('loop');
for(var i=0;i<11;i++)
{
    console.log('iteration' + i);
}
console.timeEnd('loop');


//if statement
if(userName=='Joan')
{
    console.log('Yes is the same')
}
else
{
    console.log('They are not the same')
}