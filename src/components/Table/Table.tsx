import { TableHead } from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';

import classes from './Table.module.css'

export const Table = () => (
  <table className={classes['content-table']}>
    <TableHead />
    <TableBody />
  </table>
);
