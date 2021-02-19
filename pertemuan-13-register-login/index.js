let txtHeading = document.querySelector("#heading")

let user = JSON.parse(localStorage.getItem("user"))
if (user) {
  txtHeading.innerHTML = user.name
} else {
  txtHeading.innerHTML = "Home"
}