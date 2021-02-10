// function sum() {
//   let number = 100;

//   console.log("didalam function sum", number);
//   {
//     let number = 999;
//     console.log("diluar function", number);
//   }
// }

// sum();

// let firstName = "impact";
// let lastName = "byte";

// let fullName1 = firstName + " dan " + lastName;
// console.log(fullName1);

// // template literal strings
// let fullName2 = `${firstName} dan ${lastName}`;
// console.log(fullName2);

// let number1 = 20;
// let number2 = 30;
// const add = `${number1 + number2}`;
// const add2 = `${number1}${number2}`;
// console.log(typeof add2);
// console.log(typeof add);
// console.log(typeof 50);

// function greetings1(nama) {
//   console.log("1", nama);
// }
// greetings1("impact");

// // let greetings2 = (nama) => {
// //   console.log("2", nama);
// // };
// let greetings2 = (nama) => console.log("2", nama);
// greetings2("bytessss");

// const murid = {
//   firstName: "impact",
//   lastName: "skilvul",
//   age: 30,
//   city: "kemang",
// };

// const { firstName, lastName } = murid;

// console.log(murid);
// console.log(murid.firstName);
// console.log(firstName);
// console.log(lastName);

// const [murid1, murid2, murid3, murid4] = ["a", "b", "c", "d"];
// console.log(murid1);

// const tambahMurid = (nama, kota) => {
//   const newMurid = { newName: nama, newKota: kota };
//   console.log(newMurid);
// };

// tambahMurid("thoriq", "kemang");

// const alamatBaru = (alamat) => {
//   const { kota, provinsi } = alamat;

//   const alamatNew = {
//     kota,
//     provinsi,
//     negara: "Indonesia",
//   };

//   console.log(`${alamatNew.kota}, ${alamatNew.provinsi}, ${alamatNew.negara}`);
// };

// alamatBaru({ kota: "Jaksel", provinsi: "Jakarta" });

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [0, ...array1, { nama: "impact byte" }];

// console.log("array1", array1);
// console.log("array2", array2);

// const alamat = {
//   kota: "jakarta selatan",
// };

// const name1 = {
//   nama: "thoriq",
//   ...alamat,
// };

// const name2 = {
//   nama: "Brian",
//   ...alamat,
// };

// console.log(name1);
// console.log(name2);

// const sum = (...argumens) => {
//   return argumens.reduce((a, b) => a + b);
// };

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
// console.log(sum());

// const number = (params1 = "", params2) => {
//   console.log(params1);
//   console.log(params2);
// };
// number("tesssss1", "tes2");
// number();
