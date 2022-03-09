import { useSelector } from 'react-redux';
import { TaskInterface } from '../../../interfaces/Task.interface';
import { RootState } from '../../../store';

import classes from './TableBody.module.css';

export const TableBody = () => {
  const state = useSelector((state: RootState) => state.search);

  const { matchedData: data } = state;
    
  const tasksList = data.map((task: TaskInterface) => {
    const assigned = task.assigned.map(item => (
      <li key={item.personName+item.status}>
        <p>{item.personName}</p>
        <i>{item.status}</i>
        </li>
    ));
    
    return (
      <tr key={task.id}> 
        <th>{task.id}</th>
        <th className={classes.description}>{task.description}</th>
        <th>{task.received}</th>
        <th>
          <ul>{assigned}</ul>
        </th>
        <th>{task.status}</th>
        <th>{task.priority}</th>
      </tr>
  )});
    
  return (
    <tbody className={classes['table-body']}>{tasksList}</tbody>
  );
};
