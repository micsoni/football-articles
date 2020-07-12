import { combineReducers } from "redux";
import articles from "./reducers/articles";

export const rootReducer = combineReducers({ articles });
