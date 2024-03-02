import React from 'react';
import styles from '../styles/EmployeeList.module.css';

const EmployeeList = () => {
  return (
    <div className={styles.employeeListContainer}>
      <div className={styles.topBar}>
        <div>
          <h1>Employee List</h1>
        </div>
        <div className={styles.searchBar}>
          <p>Search</p>
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div>
        <table className={styles.table}>
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
                <td>Cedric Sarillo</td>
                <td>Arellano Street, Davao City</td>
                <td>Information Technology</td>
                <td>Manager</td>
                <td>Full-Time</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td>Faith Misaurez</td>
                <td>Centro Spatial, Davao City</td>
                <td>Sales</td>
                <td>Manager</td>
                <td>Part-Time</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Vee Magsigay</td>
                <td>Tagum City</td>
                <td>Marketing</td>
                <td>Manager</td>
                <td>AWOL</td>
                <td>Active</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeList