import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = ()=>{

  return(
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Table</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Edit table</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New Event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Edit Event</Link>
    </div>
  );
 
};

export default Tables;