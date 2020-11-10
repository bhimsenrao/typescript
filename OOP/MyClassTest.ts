export class UserLogin{
  private username:string;
  private password:string;
  public login(uname:string,pword:string):void{
      this.username=uname;
      this.password=pword;
      this.validate();
  }
  private validate():void{
     if(this.username=="admin" && this.password=="admin"){
         console.log("valid user");
     }
     else{
         console.log("validation failed");
     }

  }
}
