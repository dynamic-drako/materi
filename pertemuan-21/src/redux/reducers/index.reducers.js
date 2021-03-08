import { combineReducers } from "redux";
import Counter from "./counter.reducers";
import Comment from "./comment.reducers";

const rootReducers = combineReducers({ Counter, Comment });

export default rootReducers;
