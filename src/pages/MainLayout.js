import React, { useState } from 'react';
import styles from '../styles/MainLayout.module.css';
import Sidebar from '../components/Sidebar';
import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList';

const MainLayout = () => {
  const [content, setContent] = useState('Employeelist');

  const handleSelection = (value) => {
    setContent(value);
  }
  
  return (
    <>
        <div className={styles.mainlayout}>
            <div className={styles.sidebarContainer}>
                <Sidebar onSelection={handleSelection}/>
            </div>
            <div className={styles.contentContainer}>
            {content === 'Employeelist' ? <EmployeeList /> : <CreateEmployee />}
            </div>
        </div>
    </>
  )
}

export default MainLayout