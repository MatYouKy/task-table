import { ActionType } from "../actions-types";
import { TaskInterface } from "../../interfaces/Task.interface";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const getData = (data: TaskInterface[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_DATA,
      data,
      matchedData: data
    });
  };
};

export const filterData = (data: TaskInterface[], inputValue: string) => {
  const matchedData: TaskInterface [] = data.filter((item: TaskInterface) => item.description.toLowerCase().includes(inputValue.toLowerCase()));
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FILTER_DATA,
      matchedData,
      data,
      inputValue
    });
  };
};
