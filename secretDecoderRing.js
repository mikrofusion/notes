#!/usr/bin/node
fs = require('fs');
Q = require('q');

function secretDecoderRing(fileSecret, fileKey) {
  Q.all([readFile(fileSecret), readFile(fileKey)])
  .then(decodeArray)
  .then(concatArray)
  .then(console.log)
  .fail(console.log); // log any errors
}

function readFile(filename) {
  var deferred = Q.defer();
  fs.readFile(filename, 'utf-8', function(err, data) {
    if(err) throw new Error(err);

    deferred.resolve(data.split(' '));
  });
  return deferred.promise;
}

function decode(num, key) {
  var val = parseInt(num) + parseInt(key);
  return String.fromCharCode(val);
}

function decodeArray(arr, key) {
  var secret = arr[0];
  var key = arr[1];
  return secret.map(function(num) {
    return decode(num, key);
  });
}

function concatArray(arr) {
  return arr.join('');
}

secretDecoderRing('./secret', './key');

// input file 'key': -1
// input file 'secret': 99 102 33 116 118 115 102 33 117 112 33 101 115 106 111 108 33 122 112 118 115 33 112 119 98 109 117 106 111 102
// output: be sure to drink your ovaltine
