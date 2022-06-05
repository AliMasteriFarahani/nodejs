
// way 1 :
//import aa from "./myModule";
//aa();

// way 2 :

import { aa,colors } from "./myModule";
aa();
console.log(colors.main);

// --------------
// let add = require('./exmodule');
// add()

// ----------
 let myModule = require('./exmodule');
 myModule.add()
console.log(myModule.url)