//FUNCTIONS

// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// sayHello('Mosh');

// console.log(); // global

// var message = '';
// console.log(global.message);

// var sayHello = function(){
// }

// window.sayHello();


// console.log(module);

// const logger = require('./logger');
// console.log(logger);
// logger('message');




//CREATE SERVER

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200);
        res.write('<h1>Hello Node!!!!</h1>\n');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end;
    }
}).listen(3000);

console.log('Server running at http://localhost:3000');


var fs = require('fs');

console.log('Before');
fs.readFile('./', function (error,data) {
  console.log('** During! **');
});
console.log('After');

// //EXTERNAL HTTP CALLS

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


