class Parent{
protected parent_name:string; // instance property 
show(pname:string):void{
    this.parent_name=pname;

    console.log('Parent name is '+ this.parent_name);
}

}
class Child extends Parent{
    child_name:string;
    callChild(parent_name:string,child_name:string):void{
        this.parent_name=parent_name;
        this.show(this.parent_name);
        this.child_name=child_name;
      console.log('Child name is  '+this.child_name);
    }

}
var ch =new Child();
ch.callChild("one","two");
