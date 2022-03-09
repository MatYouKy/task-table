import { TaskInterface } from "../../interfaces/Task.interface";
import { ActionType } from "../actions-types";

interface FetchDataAction {
  type: ActionType.FETCH_DATA;
  data: TaskInterface[];
  matchedData: TaskInterface[];
};

interface FilterDataAction {
  type: ActionType.FILTER_DATA;
  data: TaskInterface[];
  matchedData: TaskInterface[];
  inputValue: string;
};

export type Action = FetchDataAction | FilterDataAction;