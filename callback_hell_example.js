#!/usr/bin/node

fs = require('fs')
fs.readFile('numbers.txt', 'utf-8', function(err, data) {
  if(!err) {
    data = data.replace(/\n$/, '');    // remove newline
    var list = data.split(' ');

    //var squared = list.map(function(x) {
      //return x * x;
    //});
    var squared = [];
    for(var i = 0; i < data.length; i++) {
      squared.push(data[i] * data[i]);
    }
    console.log(squared);
  }
});
