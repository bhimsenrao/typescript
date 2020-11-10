"use strict";
exports.__esModule = true;
var ClassFile1_1 = require("./ClassFile1");
var MainApp = /** @class */ (function () {
    function MainApp() {
        this.ap1 = new ClassFile1_1.App1();
        this.ap2 = new ClassFile1_1.App2();
    }
    MainApp.prototype.mainShow = function () {
        this.ap1.show();
        this.ap2.show1();
    };
    return MainApp;
}());
var main = new MainApp();
main.mainShow();
