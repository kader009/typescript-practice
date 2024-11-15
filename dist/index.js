"use strict";
// generic
function identify(value) {
    return value;
}
let numberValue = identify(10);
// console.log(numberValue);
function createPair(v1, v2) {
    return [v1, v2];
}
// console.log(createPair<string, number>('kader', 29));
var strilgList;
(function (strilgList) {
    strilgList[strilgList["kader"] = 1] = "kader";
    strilgList[strilgList["molla"] = 2] = "molla";
    strilgList[strilgList["raser"] = 3] = "raser";
    strilgList[strilgList["abdul"] = 4] = "abdul";
})(strilgList || (strilgList = {}));
// console.log(strilgList);
// type inference
const names = ['23', '7', '8', '90'];
// console.log(names);
