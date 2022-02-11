// object attribute can be readonly
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var user1 = {
    ID: 259,
    name: "Ridvan",
    surname: "Demirci",
    salary: 1000
};
console.log("ID: ", user1.ID);
// user1.ID = 123; // we can not assign, because ID is readonly
// Index Signature
// When we don't know name of attribute, bu only know shape of content
// we can use index signature
var listOfObject = function (personnel) {
    Object.entries(personnel).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        console.log(value);
    });
};
listOfObject(__assign({}, user1));
var a = { color: "123", radius: 2 };
var ArrayOperators = /** @class */ (function () {
    function ArrayOperators() {
        this.data = [];
    }
    ArrayOperators.prototype.reverseArray = function () {
        return this.data.reduce(function (prev, next) { return __spreadArray([next], prev, true); }, []);
    };
    ArrayOperators.prototype.totalElement = function () {
        return this.data[0];
    };
    return ArrayOperators;
}());
var arrObject1 = new ArrayOperators();
arrObject1.data = [1, 2, 3];
console.log(arrObject1.reverseArray());
// ReadonlyArray
var arr2 = [1, 2, 3];
var useItem = function (initial) {
    var data = initial;
    return [
        data,
        function (element) {
            data = element;
        }
    ];
};
var _a = useItem("ridvan"), element = _a[0], setElement = _a[1];
console.log("Element: ", element);
setElement("Rıdvan Demirci");
console.log("Element: ", element);
