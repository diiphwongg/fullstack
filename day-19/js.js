// bai 1
var arr1 = [1, 4, 3, 2];
var arr2 = [5, 2, 6, 7, 1];

var intersection = arr1.reduce(function (prev, curr) {
  if (arr2.includes(curr)) {
    prev.push(curr);
  }
  return prev;
}, []);
console.log(intersection);

// bai 2
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flattenArray(arr) {
  return arr.reduce((prev1, curr1) => {
    return prev1.concat(Array.isArray(curr1) ? flattenArray(curr1) : curr1);
  }, []);
}

var flatArr = flattenArray(arr);

console.log(flatArr);

// bai 3
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var separated = arr.reduce(
  (prev2, curr2) => {
    curr2.forEach((item) => {
      if (typeof item === "string") prev2[0].push(item);
      else if (typeof item === "number") prev2[1].push(item);
      else if (typeof item === "boolean") prev2[2].push(item);
    });
    return prev2;
  },
  [[], [], []]
);

console.log(separated);

// bai 4
var posts = [
  {
    image:
      "https://fastly.picsum.photos/id/62/200/200.jpg?hmac=IdjAu94sGce82DBYTMbOYzXr7kup1tYqdr0bHkRDWUs",
    title: "Tiêu đề bài viết 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsum suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
  },
  {
    image:
      "https://fastly.picsum.photos/id/62/200/200.jpg?hmac=IdjAu94sGce82DBYTMbOYzXr7kup1tYqdr0bHkRDWUs",
    title: "Tiêu đề bài viết 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsum suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
  },
  {
    image:
      "https://fastly.picsum.photos/id/62/200/200.jpg?hmac=IdjAu94sGce82DBYTMbOYzXr7kup1tYqdr0bHkRDWUs",
    title: "Tiêu đề bài viết 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsum suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
  },
];
posts.forEach((post) => {
  let postDiv = document.createElement("div");
  postDiv.classList.add("post");

  let img = document.createElement("img");
  img.src = post.image;
  img.alt = post.title;

  let title = document.createElement("h2");
  title.textContent = post.title;

  let description = document.createElement("p");
  description.textContent = post.description;

  postDiv.appendChild(img);
  postDiv.appendChild(title);
  postDiv.appendChild(description);

  document.body.appendChild(postDiv);
});
