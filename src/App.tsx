import { SearchBar } from './components/SearchBar/SearchBar';
import { Table } from './components/Table/Table';
import { useGetTasks } from './hooks/useGetTasks';
import { useEffect } from 'react';

import classes from './App.module.css';

function App() {
  const { fetchData } = useGetTasks();

  useEffect(() => {
    //REPLACE 'URL' WITH YOUR ENDPOINT
    fetchData('URL');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={classes.app}>
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;
