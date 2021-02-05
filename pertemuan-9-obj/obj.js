// console.log(car);
let car = {
  //property
  name: "Ferrari",
  year: 2021,
  isStart: true,
  komponen: ["ban", "stir", "mesin", 4],
  // nested object
  komponen2: {
    ban: 4,
    wiper: 2,
    hitungJumlahKomponen: function () {
      return 10;
    },
  },

  // method
  engineStart: () => {
    return "Brum brum";
  },

  jalanSantai: () => {
    return "Jalan 10km/jam";
  },

  jalanNgebut: () => {
    return "Jalan 100km/jam";
  },

  rem: () => {
    return "Ngerem sampe berhenti";
  },
};

console.log(car);
console.log(car.year);
console.log(car["year"]);
car.year = 2026;
console.log(car.year);
console.log(car.komponen2.ban);
console.log(car.plat);

car.plat = "b1234wib";
console.log(car.plat);

// car = {
//   model: "terbaru",
// };
// console.log(car);

delete car.komponen;
console.log(car);

console.log(car.engineStart());
console.log(car.jalanSantai());
console.log(car.jalanNgebut());
console.log(car.rem());
console.log(car.komponen2.hitungJumlahKomponen());
console.log(car);
// looping object
for (let key in car) {
  console.log(car[key]);
}

// array isinya object
let buah = [
  { nama: "apel", warna: "merah" },
  { nama: "jeruk", warna: "orange" },
  { nama: "pear", warna: "kuning" },
  { nama: "semangka", warna: "orange" },
];

console.log(buah);
// console.log(buah[0].nama);
// console.log(buah[1].nama);
// console.log(buah[2].nama);
// console.log(buah[3].nama);

// function iterate(item) {
//   console.log(item.nama);
// }

buah.forEach((item) => {
  console.log("item dalam buah", item.nama);
});

buah.forEach((item) => {
  console.log("item dalam buah", item.warna);
});

buah.map((items) => {
  console.log(items.nama);
});

// pass by reference
let number = {
  num1: 1,
  num2: 2,
};

console.log(number.num1);
console.log(number.num2);

const changeNum = (number) => {
  (number.num1 = 10), (number.num2 = 20);
};

changeNum(number);
console.log(number.num1);
console.log(number.num2);

// looping object
for (let key in number) {
  console.log(number[key]);
}

let buah = [
  {
    nama: "pisang",
    warna: "a",
    gambar: "",
  },
];
