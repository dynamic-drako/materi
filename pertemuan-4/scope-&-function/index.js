"use strict"

// ==== SCOPE ====

// Global scope
let x = 1
{
  //  local scope
  x = 3
  let y = "saya"
}
console.log(x)
// console.log(y) // error



// ===== FUNCTION FORM ======

// Normal function
function funcBiasa(){
  // code here
}

// Dengan parameter
function luas(panjang, lebar) {
  let hasil = panjang * lebar
  console.log(hasil);
}

luas(10, 4)
luas(1, 2)
luas(4, 9)

// Dengan return
function pengurangan(x, y){
  let hasil = x - y
  return hasil
}

console.log(pengurangan(5, 1));


// variable function
let funcVariable = function(){
  // code here
}

// Arrow function
let funcArrow = () => {
  return 1 + 2
}

// Arrow func implicit return
let funcArrow = () => 1 + 2

// SIMPLE CASE
let luas = (panjang, lebar) => panjang*lebar

let panjang = prompt("input panjang")
let lebar = prompt("input lebar")

alert(`luas dari panjang:${panjang} dan lebar:${lebar} 
adalah ${luas(panjang, lebar)}`)
