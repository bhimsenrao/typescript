var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.hello = function () {
        console.log("welcome...");
    };
    return Test;
}());
var obj = new Test();
obj.hello();
