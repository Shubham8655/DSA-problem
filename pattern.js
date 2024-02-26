"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="node" />
var readline_1 = require("readline");
var process = require("process");
var readLine = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
readLine.question("Enter a number: ", function (n) {
    var num = Number(n);
    pattern(num);
});
function pattern(n) {
    part1(n);
    // part2(n);
}
function part1(n) {
    for (var row = 1; row <= 2 * n; row++) {
        // condition wiser
        if (row <= n) {
            // stars
            for (var col = 1; col <= n - row + 1; col++) {
                process.stdout.write("*");
            }
            // spaces
            for (var spaces = 1; spaces <= row - 1; spaces++) {
                process.stdout.write(" ");
            }
            // console.log();
            // spaces
            for (var spaces = 1; spaces <= row - 1; spaces++) {
                process.stdout.write(" ");
            }
            // stars
            for (var col = 1; col <= n - row + 1; col++) {
                process.stdout.write("*");
            }
            console.log();
        }
        else {
            // stars
            for (var col = 1; col <= row - n; col++) {
                process.stdout.write("*");
            }
            // spaces
            for (var spaces = 1; spaces <= 2 * n - row; spaces++) {
                process.stdout.write(" ");
            }
            // console.log();
            // spaces
            for (var spaces = 1; spaces <= 2 * n - row; spaces++) {
                process.stdout.write(" ");
            }
            // stars
            for (var col = 1; col <= row - n; col++) {
                process.stdout.write("*");
            }
            console.log();
        }
    }
}
function part2(n) {
    for (var row = 1; row <= 2 * n; row++) {
        // condition wiser
        if (row <= n) {
            // spaces
            for (var spaces = 1; spaces <= row - 1; spaces++) {
                process.stdout.write(" ");
            }
            // stars
            for (var col = 1; col <= n - row + 1; col++) {
                process.stdout.write("*");
            }
            console.log();
        }
        else {
            // spaces
            for (var spaces = 1; spaces <= 2 * n - row; spaces++) {
                process.stdout.write(" ");
            }
            // stars
            for (var col = 1; col <= row - n; col++) {
                process.stdout.write("*");
            }
            console.log();
        }
    }
}