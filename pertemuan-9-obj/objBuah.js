let buahData = ["pisang", "jeruk", "apel", "kelengkeng", "pepaya"];

// Hubungkan DOM dengan html selector
let buah = document.querySelector(".buah");

let display = () => {
  console.log("tes");
  buahData.map((item) => {
    // membuat element div baru
    let card = document.createElement("div");

    // mengisi div dengan data
    card.innerHTML = `
      <h1>${item}</h1>
    `;

    // template literal string
    // `<h1>${item}</h1>`

    // menampilkan data
    buah.appendChild(card);
  });
};

display();
