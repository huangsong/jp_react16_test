"use strict";
exports.__esModule = true;
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
//元组
var arr3 = [1, 2, 'aaa'];
var obj1 = {
    name: 'alala',
    bar: 3
};
var obj2 = {
    bar: 34
};
//接口是用来约束一个对象的结构
var obj3 = {
    name: {
        name: 'aaa',
        bar: 332
    }
};
var obj5 = {
    baba: 'alal'
};
/**
 *
 * @param callback
 */
function foo(callback) {
    callback('stt', 1);
}
//字面量类型 联合类型
var type = 'danger';
var type1 = 45;
var type2 = 23;
//maybe 类型
var gander = 34;
function pass(val) {
}
var s = Symbol(23);
var x = ['aa', 112];
x[0] = '2323';
console.log(x[0]);
var ll = 0 /* dd */;
console.log(ll);
function bilib(callback) {
    callback();
}
var bb = /** @class */ (function () {
    function bb(aa) {
        this.color = aa;
    }
    bb.prototype.pring = function () {
        console.log('pring');
    };
    return bb;
}());
var qq = new bb('red');
qq.color;
qq.pring();
