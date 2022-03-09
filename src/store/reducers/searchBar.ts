import { TaskInterface } from '../../interfaces/Task.interface';
import { Action } from '../actions/index';
import { ActionType } from '../actions-types';

interface StateInterface {
  inputValue: string;
  data: TaskInterface[];
  matchedData: TaskInterface[];
};

const initialState = {
  inputValue: '',
  data: [],
  matchedData: []
};

const searchBar = (state: StateInterface = initialState, action: Action): StateInterface => {
  switch (action.type) {
    case ActionType.FETCH_DATA:
    return {
      ...state,
      data: action.data ,
      matchedData: action.matchedData,
    };
        
    case ActionType.FILTER_DATA: 
    return {
      ...state,
      matchedData: action.matchedData,
      inputValue: action.inputValue
    };
      default:
      return state;
  };
};

export default searchBar;
