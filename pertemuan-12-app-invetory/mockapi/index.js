let displayListInventory = document.querySelector("#inventory");
console.log(displayListInventory);

const getData = async () => {
  const url = "https://5fd866537e05f000170d272e.mockapi.io/inventory";
  let response = await fetch(url);
  let result = await response.json();
  console.log(result);

  console.log("sebelum", displayListInventory);
  displayListInventory.innerHTML = "";
  console.log("sesudah", displayListInventory);
  result.map((item) => {
    // document.write(`${item.name} <br/>`);
    let cardDisplay = document.createElement("div");

    // ================ Cara 1 =====================
    cardDisplay.innerHTML = `<p>${item.name}</p>`;
    displayListInventory.appendChild(cardDisplay);

    // button delete
    let cardDelete = document.createElement("button");
    let cardDeleteText = document.createTextNode("Deletee");
    cardDelete.appendChild(cardDeleteText);
    displayListInventory.appendChild(cardDelete);

    // cardDelete.setAttribute("onclick", `deleteData('${item.id}')`);
    // cardDelete.addEventListener("click", deleteData.bind(this, item.id));

    cardDelete.addEventListener("click", () => {
      deleteData(item.id);
    });

    // cardDelete.addEventListener("click", () => {
    //   deleteData(item.id);
    //   console.log(item.id);
    // });
    console.log("id", item.id);

    // button update
    let cardUpdate = document.createElement("button");
    let cardUpdateText = document.createTextNode("Updatee");
    cardUpdate.appendChild(cardUpdateText);
    displayListInventory.appendChild(cardUpdate);
    cardUpdate.addEventListener("click", () => {
      updateData(item.id);
    });

    // ================ Cara 2 =====================
    // cardDisplay.innerHTML = `
    //   <span>${item.name}</span>
    //   <button>delete</button>
    //   <button>update</button>
    // `;
    // displayListInventory.appendChild(cardDisplay);
  });
};
getData();

let addInventorySubmit = document.querySelector("#add-inventory-btn");
console.log(addInventorySubmit);

const addData = async (event) => {
  console.log("ke klik button submit");

  // supaya web browser tidak refresh halaman
  event.preventDefault();

  // Mengambil data dari form
  let dataForm = document.querySelector("#inventory-form").value;
  console.log("value dari form", dataForm);

  // Merubah data dari form yang string menjadi object
  let dataObj = {
    name: dataForm,
  };
  console.log("value form menjadi obj", dataObj);

  // Merubah data objek menjadi JSON supaya bisa dikirim lewat post
  let dataJSON = JSON.stringify(dataObj);
  console.log("obj menjadi json", dataJSON);

  // mengepost data ke mock api
  const url = "https://5fd866537e05f000170d272e.mockapi.io/inventory/";
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: dataJSON,
  };
  console.log("options", options);

  // proses post data dengan error handling
  try {
    // mengirimkan post data
    const fetchResponse = await fetch(url, options);
    console.log("fetchResponse", fetchResponse);

    // mendapatkan hasil response dari server setelah mengirim data
    const dataResponse = await fetchResponse.json();
    console.log("dataReponse", dataResponse);

    // ambil data yang paling baru dari server setelah di add
    getData();

    // kosongkan form setelah submit berhasil
    document.querySelector("#inventory-form").value = "";
    return dataResponse;
  } catch (error) {
    console.log(error);
    alert("Server error");
  }
};
addInventorySubmit.addEventListener("click", addData);

const deleteData = async (id) => {
  console.log("button delete di click", id);

  const url = `https://5fd866537e05f000170d272e.mockapi.io/inventory/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const responseJSON = await response.json();
    console.log(responseJSON);
  } catch (error) {
    console.log(error);
  }

  getData();
};

const updateData = async (id) => {
  console.log("id dalam update", id);

  const url = "https://5fd866537e05f000170d272e.mockapi.io/inventory/";
  let dataUpdate = prompt("masukan update data");
  let dataObj = {
    name: dataUpdate,
  };
  let dataJSON = JSON.stringify(dataObj);
  console.log(dataJSON);

  const setting = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: dataJSON,
  };

  const fetchResponse = await fetch(url + id, setting);
  const dataResponse = await fetchResponse.json();
  console.log(dataResponse);

  getData();
};
