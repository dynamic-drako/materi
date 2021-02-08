let regex1 = new RegExp("cat");
// console.log(regex1.test("cato"));
// console.log(regex1.test("cat"));
// console.log(regex1.test("car"));
// console.log(regex1.test("caat"));
// console.log(regex1.test("aasdadasdadasdasdasdadasdcatasdadasdadasdas"));

let regex2 = /cat/;
// console.log(regex2.test("cato"));
// console.log(regex2.test("cat"));
// console.log(regex2.test("car"));
// console.log(regex2.test("caat"));
// console.log(regex2.test("aasdadasdadasdasdasdadasdcatasdadasdadasdas"));

let regex3 = new RegExp("[a-z]");
// console.log(regex3.test("defgh"));
// console.log(regex3.test("adefgh"));
// console.log(regex3.test("abc"));

// let regex4 = /1234567/;
let regex4 = /[1-7]/;
// console.log(regex4.test(5));
// console.log(regex4.test(6));
// console.log(regex4.test(7));
// console.log(regex4.test(8));

let regex5 = /d/i;
// let item = "David Winalda";
// console.log(item.match(regex5));
// console.log("Handuk".match(regex5));

let regex6 = /\d\s\w\w\w\w\w\w\w/;
// let myName = "44444444444444 monkeys";
// console.log(regex6.test(myName));

// console.log("10" + 1);
// console.log("10" - 1);

let regex7 = /\D\S\W\W\W/;
// let myName = "A3   ";
// console.log(regex7.test(myName));

let regex8 = /[^01]/;
// console.log(regex8.test("01010103456789"));
// console.log(regex8.test("1010101010101001"));

let regex9 = /^\w{4,6}$/;
// let myName = "monke";
// console.log(regex9.test("monke"));
// console.log(regex9.test("monkey"));
// console.log(regex9.test("monkeyssss"));

// let regex10 = /thor+/;
// console.log(regex10.test("thoiq"));
// console.log(regex10.test("thoriq"));
// console.log(regex10.test("thorrrriq"));

let regex11 = /fa+/;
// console.log(regex11.test("f"));
// console.log(regex11.test("fa"));
// console.log(regex11.test("faa"));
// console.log(regex11.test("faaa"));

let regex12 = /^Saya suka belajar coding$|^Saya suka tidur$/;
// console.log(regex12.test("saya suka belajar coding"));
// console.log(regex12.test("Saya suka belajar coding setiap hari"));
// console.log(regex12.test("Saya suka belajar coding"));
// console.log(regex12.test("Saya suka tidur"));
// console.log(regex12.test("saya suka tidur"));

const display = () => {
  console.log("tes");
  const input = document.getElementById("inputName").value;
  console.log(input);
  const regex = /[A-Z]/;
  console.log(regex.test(input));
  if (regex.test(input) === true) {
    console.log("huruf pertama huruf besar");
  } else {
    console.log("huruf pertama huruf kecil");
  }
};
