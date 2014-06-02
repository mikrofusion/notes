#!/usr/bin/node
fs = require('fs');

function secretDecoderRing(fileSecret, fileKey) {
  fs.readFile(fileKey, 'utf-8', function(err, key) {
    if (!err) {
      fs.readFile(fileSecret, 'utf-8', function(err, secret) {
        if (!err) {
          var numbers = secret.split(' ');
          var result = numbers.map(function(num) {
            var charCode = parseInt(key) + parseInt(num);
            return String.fromCharCode(charCode);
          });
          console.log(result.join(''));
        } else {
          console.log(err);
        }
      });
    } else {
      console.log(err);
    }
  });
}

secretDecoderRing('./secret', './key');

// key: -1
// secret: 99 102 33 116 118 115 102 33 117 112 33 101 115 106 111 108 33 122 112 118 115 33 112 119 98 109 117 106 111 102
// output: be sure to drink your ovaltine
