import {UserLogin} from './MyClassTest';

class User{
  private log = new UserLogin();
  login(uname:string,pword:string):string {
      this.log.login(uname,pword);
return "Done";
  }
}
var u= new User();

console.log(u.login("user","user"));
