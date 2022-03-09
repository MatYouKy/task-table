import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AssignedInterface, TaskInterface } from '../interfaces/Task.interface';
import { actionCreators } from '../store';

export const useGetTasks = () => {
  const [data, setData] = useState<TaskInterface[]>([]);
  const dispatch = useDispatch();
  const { getData } = bindActionCreators(actionCreators, dispatch)

  const fetchData = useCallback(async (url: RequestInfo) => {
    const response = await fetch(url);
    const data = await response.json();
    const tasks = data.response.data;
    let newTask: TaskInterface[] = [];

    for (const key in tasks) {
      const task = tasks[key];
      const id = task['work_order_id'];
      const description = task.description;
      const received = task['received_date'];
      const status = task.status;
      const priority = task.priority;
      let assigned: AssignedInterface[] = [];

      if (task['assigned_to']) {
        task['assigned_to'].forEach((item: { [personName: string]: string; status: string; }) => {
          assigned.push({
            personName: item['person_name'],
            status: item.status
          });
        })
      }
      newTask.push({
        id,
        description,
        received,
        assigned,
        status,
        priority
      })
    }
    setData(newTask);
    getData(newTask);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    fetchData,
    data
  };
};