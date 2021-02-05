// let buah = [
//   ["Apel", 34],
//   ["Jeruk", 25],
//   ["Mangga", 20]
// ]

// for (let i=0; i<buah.length; i++) {
//   for (let j = 0; j < buah[i].length; j++) {
//     console.log(buah[i][j]);
//   }\ 
// }

// let newBuah = buah.map(baris => {
//   return baris.map((kolom, index) => {
//     if (index == 1) {
//       return kolom - 2
//     } else {
//       return kolom
//     }
//   })
// })

// console.log(newBuah);

//  Reduce
// let angka = [1,2,3,4,5]
// let result = angka.reduce((total, value) => {
//   return total *= value
// })
// console.log(result);

// Filter
// let angka = ["Apel", "mangga", "jeruk", "Alpukat"]
// let result = angka.filter((value) => {
//   return value.length > 4
// })
// console.log(result);

let result = 0
// IndexOf
let buah = ["Apel", "mangga", "jeruk", "Alpukat", "mangga" ,"semangka"]
result = buah.indexOf("mangga")
console.log("IndexOf", result);

// LastIndexOf
result = buah.lastIndexOf( "mangga")
console.log("lastIndexOf", result);

// Find
result = buah.find((value) => value[0] == "j")
console.log("find", result);

// FindIndex
result = buah.findIndex((value) => value.length == 7)
console.log("findIndex", result);

// includes
let str = "Halllooo"
result = str.includes("lo")
console.log("includes", result);