// const textContainer = document.querySelector('.text-container');
//         const text = textContainer.textContent;
//         const textArray = text.trim().split(' ');
//         textContainer.innerHTML = textArray.map((word) => {
//             return <span>${word}</span>;
//         }).join(' ');
//         const spans = document.querySelectorAll('span');
//         let index = 0;
    
//         function highlight() {
//             // Remove 'highlight' class from all spans
//             spans.forEach(span => span.classList.remove('highlight'));
    
//             // Add 'highlight' class to the current span
//             spans[index].classList.add('highlight');
    
//             // Move to the next span
//             index++;
    
//             // Reset index if it exceeds the number of spans
//             if (index === spans.length) {
//                 index = 0;
//             }
//         }
    
//         // Set interval to call highlight function every 500 milliseconds
//         setInterval(highlight, 500);4
// bài 1

const textEle = document.querySelector(".text");
let textContent = textEle.innerText;

let arrText = textContent.split(" ");
let copyText = [...arrText];

let i = 0;

function highlightNextWord() {
  if (i > 0) {
    arrText[i - 1] = copyText[i - 1];
  }

  arrText[i] = `<span class="color">${arrText[i]}</span>`;

  textEle.innerHTML = arrText.join(" ");

  i++;
  if (i === arrText.length) {
    i = 0;
  }

  setTimeout(highlightNextWord, 1000);
}

highlightNextWord();


// bài 2
var fullname = 'nguyễn duy phương';

function chuanHoaTen(ten) {
    return ten.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

var tenChuanHoa = chuanHoaTen(fullname);
console.log(tenChuanHoa);