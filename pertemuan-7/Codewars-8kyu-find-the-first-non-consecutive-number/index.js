function firstNonConsecutive(arr) {
  console.log(arr);
  //   const array =
  //   for ()
  // looping semua array untuk bisa ditambahkan dengan 1
  // sehingga bisa membandingkan hasil array asli dengan array yang sudah ditambah 1
  // kalau semua hasil yang sesuai bisa direturn null
  console.log(arr.length);
  // ngecheck panjang array lebih dari 1
  if (arr.length > 1) {
    // looping untuk setiap elemement di array
    for (i = 1; i < arr.length; i++) {
      console.log("tes");
      // 1 >> 7 sesuai jumlag looping
      console.log(i);
      // array tapi posisinya sesuai dari i loopingnya
      console.log(arr[i]);
      // array yang posisi indexnya ditambah 1
      console.log(arr[i + 1]);
      // pertambahan 1 dari arr[i]
      console.log(arr[i] + 1);

      // if(Math.abs(arr[i-1] - arr[i]) > 1){
      //   return arr[i]
      // }

      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1];
      }
    }
  }

  return null;
}

firstNonConsecutive([1, 2, 3, 4, 6, 7, 8, 9]);
