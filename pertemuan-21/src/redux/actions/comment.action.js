import axios from "axios";

export const GET_COMMENT_REQUEST = "GET_COMMENT_REQUEST";
export const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
export const GET_COMMENT_FAILED = "GET_COMMENT_FAILED";

export const getCommentRequest = () => {
  return {
    type: GET_COMMENT_REQUEST,
  };
};

export const getCommentSuccess = (result) => {
  return {
    type: GET_COMMENT_SUCCESS,
    result,
  };
};

export const getCommentError = (error) => {
  return {
    type: GET_COMMENT_FAILED,
    error,
  };
};

export const getComment = () => {
  return function (dispatch) {
    dispatch(getCommentRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((result) => dispatch(getCommentSuccess(result.data)))
      .catch((error) => dispatch(getCommentError(error)));
  };
};
