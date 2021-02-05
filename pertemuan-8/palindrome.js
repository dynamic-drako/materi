// function palindrome(str) {
//   console.log(str);
//   const lowerCase = str.toString().toLowerCase();
//   console.log(lowerCase);
//   let split = lowerCase.split("")
//   console.log(split);
//   let reverse = split.reverse();
//   console.log(reverse);
//   let join = reverse.join("");
//   console.log(join);

//   if (str === join){
//     return true
//   } else {
//     return false
//   }
//   // if
//   // return
// }

// palindrome(4444);

// function palindrome(line) {
//   let normalize = line.toString().toLowerCase();
//   console.log(normalize);
//   let result = '';
//   for (let i = 0; i < normalize.length; i++){
//     console.log(i);
//     console.log(normalize.length);
//     console.log(normalize[i]);
//     result = normalize[i] + result
//     console.log(result);
//   }

//   if(result === normalize){
//     console.log('true', result);
//     return true
//   } else {
//     console.log('false', result);
//     return false
//   }
// }

// function palindrome(line) {
//   let normalize = line.toString().toLowerCase();
//   console.log(normalize);
//   let result = '';
//   console.log(normalize.length-1);

//   for(let i = normalize.length - 1; i >= 0; i--){
//     console.log(normalize[i]);
//     result += normalize[i]
//     console.log(result);
//   }

//   if(result === normalize){
//         console.log('true', result);
//         return true
//       } else {
//         console.log('false', result);
//         return false
//       }
// }

function palindrome(line) {
  let normalize = line.toString().toLowerCase();
  console.log(normalize);
  console.log(normalize.length);

  for (i = 0; i < normalize.length / 2; i++) {
    console.log(normalize[i]);
    console.log(normalize[normalize.length - (i + 1)]);
    console.log(normalize.length - (i + 1));
    console.log(normalize[4]);
    console.log(normalize[3]);
    if (normalize[i] === normalize[normalize.length - (i + 1)]) {
    } else {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}

palindrome("annNA");
