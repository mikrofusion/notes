#!/usr/bin/node
fs = require('fs');
Q = require('q');

function readFile(filename) {
  var deferred = Q.defer();
  fs.readFile(filename, 'utf-8', function(err, data) {
    deferred.resolve(data.split(' '));
  });
  return deferred.promise;
}

function decode(num) {
  return String.fromCharCode(parseInt(num));
}

function decodeArray(arr) {
  return arr.map(function(x) {
    return decode(x);
  });
}

function concatArray(arr) {
  return arr.join('');
}

function secretDecoderRing(inputFile) {
  readFile(inputFile)
  .then(decodeArray)
  .then(concatArray)
  .then(console.log);
}

secretDecoderRing('./secret');

// secret: 98 101 32 115 117 114 101 32 116 111 32 100 114 105 110 107 32 121 111 117 114 32 111 118 97 108 116 105 110 101
// output: be sure to drink your ovaltine
