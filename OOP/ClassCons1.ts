export class ClassCons1{
    public constructor(data:string){
    console.log("Constructor ready to Use");
    this.show(data);
}
private show(data:string):void{
    console.log('Welcome....'+data);
}
static hello(){ console.log("test") }
}
var cc= new ClassCons1('Jayan');
ClassCons1.hello()