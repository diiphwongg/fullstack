// bài 1
function findMaxMin(arr) {
    if (arr.length === 0) return null;

    var max = arr[0];
    var min = arr[0];
    var maxIndex = 0;
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    return {
        max: max,
        maxIndex: maxIndex,
        min: min,
        minIndex: minIndex
    };
}

// Ví dụ
var array1 = [3, 1, 4, 1, 5, 9];
console.log(findMaxMin(array1));
// Bài 2
function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function averagePrime(arr) {
    var sum = 0;
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) return "Không có số nguyên tố";
    return sum / count;
}

// Ví dụ
var array2 = [2, 3, 4, 5, 6, 7];
console.log(averagePrime(array2));
// Bài 3
function removeDuplicates(arr) {
    var uniqueArray = [];

    for (var i = 0; i < arr.length; i++) {
        var isDuplicate = false;
        for (var j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

// Ví dụ
var array3 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array3));
// Bài 4
function insertAndSort(arr, element) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    var index = 0;
    while (index < arr.length && arr[index] < element) {
        index++;
    }

    arr.splice(index, 0, element);
    
    return arr;
}

// Ví dụ sử dụng
var numbers = [5, 1, 9, 8, 10];
var element = 4;
var result = insertAndSort(numbers, element);
console.log(result); 
