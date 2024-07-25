import React, { useEffect } from 'react';
import styles from './HomePage.module.css';
import DataGrid from '../../components/DataGrid/DataGrid.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import { useHomeContext } from '../../contexts/HomeContext.jsx';
import { useAuthenticationContext } from '../../contexts/AuthenticationContext.jsx';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { buildings, handleGetAllBuildings, handleGetAllNotBuiltBuildingTypes,
    setIsModalOpen, isModalOpen } = useHomeContext();
  const { isAuthenticated } = useAuthenticationContext();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      await handleGetAllBuildings();
    } catch (error) {
      console.error('Error fetching buildings:', error);
    }
  };
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchData();
  }, [buildings, navigate]);


  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <button onClick={() => setIsModalOpen(true)} className={styles.addButton}>Add</button>
        <h2 className={styles.headerTitle}>Buildings</h2>
      </div>
      <div className={styles.tableContainer}>
        <DataGrid dataGridData={buildings} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePage;