let txtHeading = document.querySelector("#heading")
let cart = document.querySelector("#cart")

cart.addEventListener("click", () => {
  let isLogin = localStorage.getItem("isLoggedin")
  if (isLogin) window.location.href = "./cart.html"
})

let user = JSON.parse(localStorage.getItem("user"))
if (user) {
  txtHeading.innerHTML = user.name
} else {
  txtHeading.innerHTML = "Home"
}