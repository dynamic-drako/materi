import {
  GET_COMMENT_FAILED,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
} from "../actions/comment.action";

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      console.log("sudah request data", action);
      return {
        ...state,
        isLoading: true,
      };
    case GET_COMMENT_SUCCESS:
      console.log("comment sukses");
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_COMMENT_FAILED:
      console.log("comment gagal");
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default comment;
