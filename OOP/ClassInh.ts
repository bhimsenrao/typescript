class One{
test():void{
    console.log("from ONE")
}
}
class Two extends One{
    test():void{
        console.log("from TWO")
    }    
}
class Three extends Two {
    test():void{
        super.test()
        console.log("from Three")
    }
}
var obj= new Three();
obj.test()