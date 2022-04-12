var http = require('http');
var {readFile, appendFile, open, writeFile, rename} = require('fs');
var {upperCase} = require('upper-case');


//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(req.url);
    res.write('Hello World hi whats up!!!!!'); //write a response to the client
    res.end(); //end the response
    console.log(req.url);
  }).listen(8080); //the server object listens on port 8080




// http.createServer(function (req, res) {
//     readFile('test.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }).listen(8080);


//    open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


//    writeFile('mynewfile2.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


//   rename('mynewfile2.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });


  
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(upperCase("Hello World!"));
//   res.end();
// }).listen(8080);


// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('abc', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('abc');



// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'zeligh4762@gmail.com',
//     pass: 'Zeligh7933'
//   }
// });

// var mailOptions = {
//   from: 'zeligh4762@gmail.com',
//   to: 'faigyherskowits1@ygmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });