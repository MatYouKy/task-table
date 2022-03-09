import React from 'react';

import classes from './TableHeading.module.css';

export const TableHead = () => (
  <thead className={classes.heading}>
    <tr>
      <th>id</th>
      <th>description</th>
      <th>received</th>
      <th>status</th>
      <th>priority</th>
      <th>assigned</th>
    </tr>
  </thead>
);
