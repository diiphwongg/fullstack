// Bài 1
var a = 5;
var b = 10;
a = a + b;
b = a - b;
a = a - b;

console.log("a:", a);
console.log("b:", b); 

// bài 2
var S = 10 + 20 + Math.pow(5, 10) / 2;
console.log("S =", S);

// bài 3
var a = 5;
var b = 10;
var c = 7;
var max;
if (a >= b && a >= c) {
    max = a;
} else if (b >= a && b >= c) {
    max = b;
} else {
    max = c;
}
console.log("Số lớn nhất là:", max);

// bài 4
var a = 1;
var b = -2;
if (a * b > 0) {
    console.log("Hai số cùng dấu");
} else {
    console.log("Hai số khác dấu");
}

// bài 5
var a = 5;
var b = 2;
var c = 8;
if (a > b) {
    var temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    var temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    var temp = b;
    b = c;
    c = temp;
}
console.log("Thứ tự tăng dần:", a, b, c);
