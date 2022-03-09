import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../../store';

import classes from './SearchBar.module.css';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.search);
  const { data, inputValue } = state;

  const { filterData } = bindActionCreators(actionCreators, dispatch);

  const valueChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    filterData(data, value);
  }
  return (
    <div className={classes['search-bar']}>
        <input id='search-bar' placeholder='SEARCH' onChange={valueChangeHandler} value={inputValue}/>
    </div>
  )
}
