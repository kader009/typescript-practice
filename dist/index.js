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
const tuple = ['kader', 23, true];
// console.log(tuple);
const age = [29, 30];
const [age1, age2] = age;
// console.log(age1);
const car = {
    type: 'toyota',
    model: 'f6i noida',
    year: 2000,
};
const language = {
    en: 'English',
    bn: 'Bengali',
    es: 'Spanish',
};
// console.log(language['en']);
const nameAgeMap = {};
const gether = (nameAgeMap.kader = 29);
const AboutMe = {
    name: 'kader',
    age: 29,
    Occupation: true,
};
// console.log(AboutMe);
// void => use when function never need to return something
function VoidFunc() {
    console.log('i am void function');
}
VoidFunc();
