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