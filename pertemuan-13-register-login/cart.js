let displayCart = document.querySelector("#cart");

const showCartUser = async () => {
  console.log("tes");
  let dataUserJSON = localStorage.getItem("user");
  console.log(dataUserJSON);
  let dataUserObj = JSON.parse(dataUserJSON);
  console.log(dataUserObj);

  let displayNama = document.querySelector("#namaUser");
  displayNama.innerHTML = `<p>${dataUserObj.name}</p>`;

  let response = await fetch(
    `https://5fd866537e05f000170d272e.mockapi.io/user/${dataUserObj.id}/cart`
  );
  console.log(response);
  let dataResponse = await response.json();
  console.log(dataResponse);

  dataResponse.map((item) => {
    let displayItem = document.createElement("div");
    displayItem.innerHTML = `<p>${item.name}</p><p>${item.price}</p>`;

    displayCart.appendChild(displayItem);
  });
};

showCartUser();

let btnLogout = document.querySelector("#logout")
btnLogout.addEventListener("click", () => {
  console.log("TESSSS");
  // Menghapus data di dlm localstorage
  localStorage.removeItem("user")
  localStorage.removeItem("isLoggedin")

  // Pindah halaman
  window.location.href = "./index.html"
})
