class First{
    protected first:number;
    protected second:number;
    inputData(f:number,s:number){
        this.first=f;
        this.second=s;
    }
}
class Addition extends First{
    addNums():number{
        return (this.first+this.second);
    }
}
class  Multiplication extends First{
    multiply():number{
        return (this.first*this.second);
    }
}
var  adding   =  new Addition();
var  mutiply  = new Multiplication();
adding.inputData(10,30);
console.log(adding.addNums());