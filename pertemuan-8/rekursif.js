function genap(n) {
  if (n == 1){
    console.log(0);
  } else {
    genap(n-1)
    if (n%2 == 0) {
      console.log(n);
    }
  }
}

genap(5)