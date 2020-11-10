interface Hello{
  hi():string;
}
interface Welcome{
  invite(name:string):string;
}
class Test implements Hello,Welcome{
hi():string{
  return "Hello...."
}
invite(name:string):string{
  return "Welcome to "+name;
}
}
var t= new Test();
console.log(t.hi());
console.log(t.invite("sen"));
class Tester{
 fn:Hello={
  hi:()=>{      return "TEst me";   }
}
 wel:Welcome={
  invite:(x)=>{     return "Welcome to "+x;  }
}
}
var test= new Tester();
test.fn.hi();
console.log(test instanceof Test)