import { combineReducers } from "redux";

import Counter from "./counter.reducers";
import getData from "./user.reducers";

const rootReducers = combineReducers({ Counter, getData });

export default rootReducers;
