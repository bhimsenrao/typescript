// tuple : is a collection of heterogenic properties, this can even be used to declare record structure
let  person=[101,"Ajay",4500.90,false];
person.push("Manager");
person.sort()
console.log(person)
var [id,pname,job]=person;

console.log("Copye from tuple Person ")
console.log(id);
console.log(pname+' '+job);
console.log(person[2])
person.pop()
console.log("Values from tuple")
for(var i=0;i<person.length;i++){
    console.log(person[i]);
}