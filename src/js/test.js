"use strict";
console.log('-----------------------------------------');
console.log('ES2018 - new features || JavaScript Test CLI Application || Test-1');
console.log('-----------------------------------------\n');
console.log('Task:\nWrite js cli-app for creating a 16-rows of Pascal\'s Triangle');
console.log('-----------------------------------------\n');
console.log('Solution:');
console.log('-----------------------------------------\n');
var LIMIT = 16;
var triangle = [];
for (var row = 0; row < LIMIT; row++) {
    triangle.push([]);
    for (var column = 0; column <= row; column++) {
        triangle[row][column] = (column === 0 || column === row) ?
            1 :
            triangle[row - 1][column - 1] + triangle[row - 1][column];
    }
}
console.log('16 rows of the Pascal\'s Triangle:\n');
triangle.forEach(function (row) {
    console.log(row.join(' '));
});
console.log('\n-----------------------------------------');
console.log('Copyright 2019 Vladimir Pavlov. All Rights Reserved.');
console.log('-----------------------------------------');
