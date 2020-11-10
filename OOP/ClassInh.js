var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var One = /** @class */ (function () {
    function One() {
    }
    One.prototype.test = function () {
        console.log("from ONE");
    };
    return One;
}());
var Two = /** @class */ (function (_super) {
    __extends(Two, _super);
    function Two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Two.prototype.test = function () {
        console.log("from TWO");
    };
    Two.prototype.test = function (x) {
        console.log(x);
    };
    return Two;
}(One));
var Three = /** @class */ (function (_super) {
    __extends(Three, _super);
    function Three() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Three.prototype.test = function () {
        _super.prototype.test.call(this);
        console.log("from Three");
    };
    return Three;
}(Two));
var obj = new Three();
obj.test();
