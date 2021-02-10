// const sum = (number1, number2, callback) => {
//   console.log(number1 + number2);
//   callback();
// };

// const callbackMe = () => {
//   console.log("selesai");
// };

// sum(1, 2, callbackMe);

// const task1 = () => {
//   console.log("task1 selesai");
// };

// const task2 = () => {
//   setTimeout(() => {
//     console.log("task2 selesai");
//   }, 3000);
// };

// const task3 = () => {
//   task1();
//   task2();
//   console.log("task3 selesai");
// };

// task3();

// const examplePromise = (condition) => {
//   new Promise((resolve, reject) => {
//     // let condition = false;
//     if (condition) {
//       resolve("Janji terpenuhi");
//     } else {
//       reject(new Error("Janji tidak terpenuhi"));
//     }
//   })
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// };

// examplePromise(false);

// const getDataAPI = () => {
//   const api = "https://jsonplaceholder.typicode.com/posts";
//   fetch(api)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("error", error));
// };

// getDataAPI();

// async function halo() {
//   console.log("a");
//   let result = await console.log("hello");
//   console.log("b");
//   return result;
// }

// halo();

// const hallo = async () => {
//   const api = "https://jsonplaceholder.typicode.com/psts";
//   let response = await fetch(api);
//   console.log(response);
//   let result = await response.json();
//   console.log(result);
// };

// hallo();

// https://pokeapi.co/api/v2/pokemon/pikachu

// const haloPikachu = async () => {
//   const api = "https://pokeapi.co/api/v2/pokemon/pikachu";
//   let response = await fetch(api);
//   let result = await response.json();
//   console.log(result);
//   document.write(result.name);
// };

// haloPikachu();

const getGithubProfile = async () => {
  const api = "https://api.github.com/users/thoriqnf";
  let response = await fetch(api);
  console.log(response);
  let result = await response.json();
  console.log(result);
  document.write(result.name);
};

getGithubProfile();
