const quarterOf = (month) => {
  // Your code here
  // let quarter = [1,2,3,4,5,6,7,8,9,10,11,12]
  console.log(month);

  // input 1 >> pake if untuk cari 1 masuk quarter berapa

  if (month <= 3) {
    console.log("tes1");
    return 1;
    // console.log('tes2')
  } else if (month <= 6 && month >= 4) {
    return 2;
  } else if (month <= 9 && month >= 7) {
    return 3;
  } else {
    return 4;
  }
};

quarterOf(3);
