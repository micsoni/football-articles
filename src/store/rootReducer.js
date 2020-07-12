import { combineReducers } from "redux";
import articles from "./reducers/articles";
import error from "./reducers/error";

export const rootReducer = combineReducers({ articles, error });
