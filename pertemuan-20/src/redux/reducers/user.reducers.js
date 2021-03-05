import {
  GET_DATA_FAILED,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "../actions/user.actions";

const initialState = {
  data: [],
  error: null,
};

const getData = (state = initialState, action) => {
  console.log("action user", action);
  switch (action.type) {
    case GET_DATA_REQUEST:
      console.log("sedang ambil data");
      return {
        ...state,
      };
    case GET_DATA_SUCCESS:
      console.log("sudah sukses", action);
      return {
        ...state,
        data: action.result,
      };
    case GET_DATA_FAILED:
      console.log(action.error);
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getData;
