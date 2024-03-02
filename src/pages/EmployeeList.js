import React from 'react';
import styles from '../styles/EmployeeList.module.css';

const EmployeeList = () => {
  return (
    <div className={styles.employeeListContainer}>
      <div className={styles.topBar}>
      <h1>Employee List</h1>
      <span>
        <p>Search</p>
        <input type="search" placeholder="Search" />
      </span>
      </div>
      <div>
        <table classname={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Employee Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
              <tr>
                <td>1</td>
                <td>John</td>
                <td>Smith</td>
                <td>1</td>
                <td>John</td>
                <td>Smith</td>
              </tr>
              <tr>
                <td>1</td>
                <td>John</td>
                <td>Smith</td>
                <td>1</td>
                <td>John</td>
                <td>Smith</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeList