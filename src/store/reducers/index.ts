import { combineReducers } from "redux";
import searchBar from "./searchBar";

const reducers = combineReducers({
  search: searchBar
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;