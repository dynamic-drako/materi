const biodata = [
  // {
  //   nama: "thoriq",
  //   hobby: ["tidur", "nonton", "makan"],
  // },
  // {
  //   nama: "suryanto",
  //   hobby: ["music", "nonton"],
  // },
  {
    nama: "Auzan",
    hobby: [
      {
        ngoding: ["js", "java", "python"],
        music: "gitar",
      },
    ],
  },
];

console.log(biodata);

biodata.map((item) => {
  console.log(item.nama);
  document.write(`<h1>${item.nama}</h1>`);
  // document.write(`<h1>${item.hobby}</h1>`);
  item.hobby.map((itemArray) => {
    console.log(itemArray);
    // document.write(`<h1>${itemArray.ngoding}</h1>`);
    itemArray.ngoding.map((itemNgoding) => {
      console.log(itemNgoding);
      document.write(`<h1>${itemNgoding}</h1>`);
    });
  });
});
