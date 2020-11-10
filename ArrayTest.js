var list = [];
//let allows you to declare variables that are limited in scope
// var allows  defines a variable globally, or locally to an entire function regardless of block scope.
list.push(10);
list.push(20);
list.push(14);
list.sort();
list.pop();
console.log(list);
var names = Array("Apple", "Guava", "Grapes", "Banana");
console.log('count of names ', names.length);
for (var n = 0; n < names.length; n++) {
    console.log(names[n]);
}
