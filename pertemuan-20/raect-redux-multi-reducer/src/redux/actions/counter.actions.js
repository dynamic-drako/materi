import axios from "axios";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

export const getDataSuccess = () => {
  return {
    type: GET_DATA_SUCCESS,
  };
};

export const getDataFailed = () => {
  return {
    type: GET_DATA_FAILED,
  };
};

export const getData = () => {
  return function (dispatch) {
    dispatch(getDataRequest);

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error)));
  };
};
