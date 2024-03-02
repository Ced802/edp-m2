import React from 'react'
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ onSelection }) => {
  const handleClick = (value) => {
    onSelection(value);
  };

  return (
    <div className={styles.sidebar}>
      <h1>Employee Manager</h1>
        <ul>
          <li onClick={() => handleClick('Employeelist')}><p>Employee List</p></li>
          <li onClick={() => handleClick('CreateEmployee')}><p>Create Employee</p></li>
        </ul>
    </div>
  )
}

export default Sidebar