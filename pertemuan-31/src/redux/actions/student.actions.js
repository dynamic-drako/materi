import axios from "axios";
// constant
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

// function dari const
export const setRegister = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const setLogin = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

// isi dari functionnya register
export const registerActions = (values, event, history) => (dispatch) => {
  event.preventDefault();
  console.log("register actions values", values);
  console.log("register actions event", event);
  console.log("register actions history", history);

  return axios
    .post("https://jwt-express-mongoose.herokuapp.com/auth/register", values)
    .then((response) => {
      console.log("response dari server register", response);
      dispatch(setRegister(response.data.data));
      history.push("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};

// isi dari functionnya login
export const loginActions = (values, event, history) => {
  return function (dispatch) {
    event.preventDefault();
    console.log("register actions values", values);
    console.log("register actions event", event);
    console.log("register actions history", history);

    axios
      .post("https://jwt-express-mongoose.herokuapp.com/auth/login", values)
      .then((response) => {
        console.log("response login dari server", response);

        if (response.data.token !== undefined) {
          localStorage.setItem("token", response.data.token);
          dispatch(setLogin(response.data.token));
          history.push("/");
        } else {
          alert("PASSWORD ANDA SALAH");
        }
      })
      .catch((error) => console.log(error));
  };
};

// export const registerActions = (values, event, history) =>  {
//   return function (dispatch){
//     event.preventDefault();
//     console.log("register actions values", values);

//     // axios
//     //   .post("https://jwt-express-mongoose.herokuapp.com/auth/register", values)
//     //   .then((response) => {
//     //     console.log("response dari server register", response);
//     //     dispatch(setRegister(response.data));
//     //     history.push("/login");
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });
//   }

// };
