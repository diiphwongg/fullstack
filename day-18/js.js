// bài 1
function tinhTienTaxi(soKm) {
    var tongTien = 0;

    if (soKm <= 1) {
        tongTien = soKm * 15000;
    } else if (soKm <= 5) {
        tongTien = 1 * 15000 + (soKm - 1) * 13500;
    } else {
        tongTien = 1 * 15000 + 4 * 13500 + (soKm - 5) * 11000;
    }

    if (soKm > 120) {
        tongTien *= 0.9;
    }

    return tongTien;
}

var soKm = 130;
console.log(`Số tiền cước taxi cho ${soKm} km là: ${tinhTienTaxi(soKm)} đ`);


// bài 2
function tinhTienDien(soKwh) {
    var tongTien = 0;

    if (soKwh <= 50) {
        tongTien = soKwh * 1678;
    } else if (soKwh <= 100) {
        tongTien = 50 * 1678 + (soKwh - 50) * 1734;
    } else if (soKwh <= 200) {
        tongTien = 50 * 1678 + 50 * 1734 + (soKwh - 100) * 2014;
    } else if (soKwh <= 300) {
        tongTien = 50 * 1678 + 50 * 1734 + 100 * 2014 + (soKwh - 200) * 2536;
    } else if (soKwh <= 400) {
        tongTien = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (soKwh - 300) * 2834;
    } else {
        tongTien = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (soKwh - 400) * 2927;
    }

    return tongTien;
}

var soKwh = 450;
console.log(`Số tiền điện phải đóng cho ${soKwh} kWh là: ${tinhTienDien(soKwh)} đồng`);


// bài 3
function tinhGiaTriBieuThuc(n) {
    var S = 0;
    for (var i = 1; i <= n; i++) {
        S += i * (i + 1);
    }
    return S;
}

var n = 5;
console.log(`Giá trị của biểu thức khi n = ${n} là: ${tinhGiaTriBieuThuc(n)}`);


// bài 4
function kiemTraSoNguyenTo(n) {
    if (n <= 1) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

var so = 11;
if (kiemTraSoNguyenTo(so)) {
    console.log(`${so} là số nguyên tố.`);
} else {
    console.log(`${so} không phải là số nguyên tố.`);
}


// bài 5
function veTamGiacSo(N) {
    var count = 1;
    for (var i = 1; i <= N; i++) {
        var row = "";
        for (var j = 0; j < i; j++) {
            row += count + " ";
            count++;
        }
        console.log(row);
    }
}

veTamGiacSo(5);


// bài 6
function veBanCoVua(size) {
    for (var i = 0; i < size; i++) {
        var row = "";
        for (var j = 0; j < size; j++) {
            row += (i + j) % 2 === 0 ? "X " : "O ";
        }
        console.log(row);
    }
}

veBanCoVua(8);


// bài 7
function veBangCuuChuong() {
    for (var i = 1; i <= 10; i++) {
        var bang = `Bảng cửu chương ${i}:\n`;
        for (var j = 1; j <= 10; j++) {
            bang += `${i} x ${j} = ${i * j}\n`;
        }
        console.log(bang);
    }
}   

veBangCuuChuong();


// bài 8 
function tinhGiaTriBieuThucKhongDungVongLap(N) {
    if (N === 1) return 1;
    return 1 / N + tinhGiaTriBieuThucKhongDungVongLap(N - 1);
}

var N = 5;
console.log(`Giá trị của biểu thức khi N = ${N} là: ${tinhGiaTriBieuThucKhongDungVongLap(N)}`);

