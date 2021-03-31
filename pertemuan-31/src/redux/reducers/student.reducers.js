import { REGISTER, LOGIN } from "../actions/student.actions";

const token = localStorage.getItem("token");

const initialState = token
  ? {
      isLogged: true,
      data: [],
    }
  : {
      isLogged: false,
      data: [],
    };

const student = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      console.log("action didalam register", action);
      return {
        registerData: action.payload,
      };
    case LOGIN:
      console.log("action didalam login", action);
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default student;
