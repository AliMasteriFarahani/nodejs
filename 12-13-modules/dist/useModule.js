"use strict";

var _myModule = require("./myModule");

(0, _myModule.aa)();
// way 1 :
//import aa from "./myModule";
//aa();

// way 2 :

console.log(_myModule.colors.main);

// --------------
// let add = require('./exmodule');
// add()

// ----------
var myModule = require('./exmodule');
myModule.add();
console.log(myModule.url);