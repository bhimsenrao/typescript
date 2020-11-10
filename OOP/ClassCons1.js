"use strict";
exports.__esModule = true;
exports.ClassCons1 = void 0;
var ClassCons1 = /** @class */ (function () {
    function ClassCons1(data) {
        console.log("Constructor ready to Use");
        this.show(data);
    }
    ClassCons1.prototype.show = function (data) {
        console.log('Welcome....' + data);
    };
    ClassCons1.hello = function () { console.log("test"); };
    return ClassCons1;
}());
exports.ClassCons1 = ClassCons1;
var cc = new ClassCons1('Jayan');
ClassCons1.hello();
