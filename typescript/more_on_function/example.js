// simplest way to define function ()=>void
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Generic function
// let's think about reverse of number array
var reverseArray = function (arr) {
    return arr.reduce(function (prev, next) { return __spreadArray([next], prev, true); }, []);
};
console.log(reverseArray([1, 2, 3]));
// console.log(reverseArray(["john", "doe", "jack"])); // we can not do this for string
// let's use generic
var genericReverseArray = function (arr) {
    return arr.reduce(function (prev, next) { return __spreadArray([next], prev, true); }, []);
};
console.log(genericReverseArray([1, 2, 3]));
console.log(genericReverseArray(["john", "doe", "jack"])); // type inferred automatically
console.log(genericReverseArray(["john", 3, "jack"]));
// constraints
// sometimes we want function to have some specific attributes
// so that we have to constraint the type
// return greater length
var returnGreater = function (arr1, arr2) {
    return arr1.length > arr2.length ? arr1 : arr2;
};
console.log(returnGreater([1, 2, 3], [1, 2]));
console.log(returnGreater("foo", "fo"));
// addInnerText of element
var addText = function (element) {
    element.innerText = "loo";
};
// some guidelines for writing Generic functions
// * push type parameters down
// * use fewer parameters
// * type should appears more than once
// Get Custom event wrapper
var getData = function (e) {
    var data = e.detail;
    return data;
};
console.log(getData({ detail: 5 }));
// function overload
