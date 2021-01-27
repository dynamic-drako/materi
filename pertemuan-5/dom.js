// DOM select document
console.log(document);

// Mengambil data dari html
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Merubah data
document.title = "JS Draco";

// mengambil element

console.log(document.getElementById("hello").innerHTML);
console.log(document.querySelector("#hello").innerHTML);
console.log(document.getElementsByClassName("helloClass")[0].innerHTML);
console.log(document.querySelector(".helloClass").innerTEXT);

document.querySelector("#hello").style.backgroundColor = "black";
document.querySelector("#hello").style.color = "white";
document.querySelector("#hello").style.textAlign = "end";

// DOM Node
console.log(document.head.parentNode);
console.log(document.body.parentNode);
console.log(document.body.childNodes);
console.log(document.body.previousSibling);

// mouse over
let mouseOver = document.querySelector("#mouseOver");
console.log(mouseOver);
mouseOver.addEventListener("click", displayAlert);

function displayAlert() {
  console.log(mouseOver.innerHTML);
  alert(mouseOver.innerHTML);
}

// display message from input
let message = document.querySelector("#inputMessage");
console.log(message);

// function getMessage() {
//   console.log(message.value);
// }

function displayMessage() {
  alert(message.value);
}
