//bai 1
function calculateSum(...numbers) {

    for (var number of numbers) {
      if (typeof number !== 'number') {
        return 'Error: Tất cả tham số phải là số';
      }
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
    return sum;
  }
  
  console.log(calculateSum(1, 2, 3)); 
  console.log(calculateSum(1, 'a', 3)); 

//bai 2
Number.prototype.getCurrency = function (currencyUnit) {
    return this.toLocaleString('vi-VN') + ' ' + currencyUnit;
  };
  
  var price1 = 12000;
  console.log(price1.getCurrency('đ'));
  
  var price2 = 12000000;
  console.log(price2.getCurrency('đ'));

//bai 3
var arr = [
    { id: 1, name: "Chuyên mục 1", parent: 0 },
    { id: 2, name: "Chuyên mục 2", parent: 0 },
    { id: 3, name: "Chuyên mục 3", parent: 0 },
    { id: 4, name: "Chuyên mục 2.1", parent: 2 },
    { id: 5, name: "Chuyên mục 2.2", parent: 2 },
    { id: 6, name: "Chuyên mục 2.3", parent: 2 },
    { id: 7, name: "Chuyên mục 3.1", parent: 3 },
    { id: 8, name: "Chuyên mục 3.2", parent: 3 },
    { id: 9, name: "Chuyên mục 3.3", parent: 3 },
    { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
    { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
  ];
  
  function newArr(item) {
    var map = {};
    var tree = [];
  
    item.forEach(function (item) {
      map[item.id] = { ...item, children: [] };
    });
  
    item.forEach(function (item) {
      if (item.parent === 0) {
        tree.push(map[item.id]);
      } else {
        map[item.parent].children.push(map[item.id]);
      }
    });
  
    return tree;
  }
  
  var obj = newArr(arr);
  console.log(obj);
  
  // Bài 4
  Array.prototype.reduce2 = function(prev, curr) {

    if (this.length === 0 && arguments.length < 2) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    var accumulator = curr;
    var startIndex = 0;

    if (arguments.length < 2) {
        accumulator = this[0];
        startIndex = 1;
    }

    for (var i = startIndex; i < this.length; i++) {
        accumulator = prev(accumulator, this[i], i, this);
    }

    return accumulator;
};
