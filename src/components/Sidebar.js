import React from 'react'
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h1>Employee Manager</h1>
        <ul>
          <li><p>Employee List</p></li>
          <li><p>Create Employee</p></li>
        </ul>
    </div>
  )
}

export default Sidebar