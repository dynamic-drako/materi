const signin = () => {
  console.log("signin");

  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;

  console.log("input", emailInput, passwordInput);

  fetch("https://5fd866537e05f000170d272e.mockapi.io/user")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      // result.map((user) => {
      //   console.log(user);
      //   if (emailInput === user.email) {
      //     alert("ketemu");

      //   }
      // });

      const user = result.filter((user) => user.email === emailInput);
      console.log(user);
      console.log(user[0]);

      let {password, ...restUser} = user[0]

      if (user.length > 0) {
        alert("user ditemukan");

        if (password === passwordInput) {
          localStorage.setItem("user", JSON.stringify(restUser));
          localStorage.setItem("isLoggedin", true);
          alert("login berhasil");
          window.location.href = "./index.html";
        } else {
          alert("password anda salah");
        }
      } else {
        alert("user tidak ditemukan");
      }
    })
    .catch((error) => console.log(error));
};
