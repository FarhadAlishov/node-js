//FUNCTIONS

    // function sayHello(name) {
    //     console.log('Hello ' + name);
    // }
    // sayHello('Mosh');


// GLOBALS  - NO WINDOW !!!!

    // __dirname  - path to current directory
    // __filename - file name
    // require    - function to use modules (CommonJS)
    // module     - info about current module (file)
    // process    - info about env where the program is being executed


    // console.log(module);

    // const logger = require('./logger');
    // console.log(logger);
    // logger('message');




//CREATE SERVER

    // const http = require('http');

    // const server = http.createServer((req, res) => {
    //     if (req.url === '/') {
    //         res.writeHead(200);
    //         res.write('<h1>Hello Node!!!!</h1>\n');
    //         res.end();
    //     }

    //     if (req.url === '/api/courses') {
    //         res.write(JSON.stringify([1,2,3]));
    //         res.end;
    //     }
    // }).listen(3000);

    // console.log('Server running at http://localhost:3000');


// var fs = require('fs');

// console.log('Before');
// fs.readFile('./', function (error,data) {
//   console.log('** During! **');
// });
// console.log('After');



// EXTERNAL HTTP CALLS

    // var http = require('http');

    // http.request({
    //     host: 'www.google.com',
    //     method: 'GET',
    //     path: "/"
    // }, 
    // function(response) {
    //     response.setEncoding("utf8");
    //     response.on("readable", function() {
    //         console.log(response.read())
    //     });
    // }).end();


  
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data  = require('./6-alt-flavor')
const mind  = require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.singlePerson.name)
sayHi(data.items[1])

//STRING

    // console.log(`SOMETHING : ${VAR1 + VAR2}`)

//FUNCTIONS

    // const FUNCTIONNAME = (ARG) => {
    // }

//USE MODULES

    // const VARNAME = require('./MODULENAME') 

//EXPORT MODULES

    // module.exports = VARNAME or FUNCTIONNAME or OBJNAME