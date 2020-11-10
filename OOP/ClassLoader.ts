import { App1, App2 } from './ClassFile1';

class MainApp{

    ap1 = new App1();
    ap2 = new App2();
    mainShow():void{
        this.ap1.show();
        this.ap2.show1();

    }
}
var main = new MainApp();
main.mainShow();