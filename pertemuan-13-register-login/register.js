const register = async () => {
  console.log("click");

  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;
  let nameInput = document.getElementById("name").value;

  console.log("dari input", emailInput, passwordInput, nameInput);

  let userData = {
    name: nameInput,
    email: emailInput,
    password: passwordInput,
  };

  let response = await fetch(
    "https://5fd866537e05f000170d272e.mockapi.io/user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  let result = await response.json();
  console.log(result);
  window.location.href = "./signin.html";
};
