interface MyInt{
message():void;
}
interface First{
test():void;
}
class MyClass implements MyInt,First{
    message():void{
console.log("Hi..");
    }
    test():void{
        console.log("Done..")
    }
}
var obj =new MyClass();
obj.message();
obj.test();
console.log(obj instanceof MyClass );