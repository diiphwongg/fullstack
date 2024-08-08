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
