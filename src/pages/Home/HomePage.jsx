import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import BuildingDataGrid from '../../components/PageSpecific/home/BuildingDataGrid/BuildingDataGrid.jsx';
import BuildingModal from '../../components/PageSpecific/home/BuildingModal/BuildingModal.jsx';
import useAuthMethods from '../../hooks/useAuthMethods.js';
import Header from '../../components/Header/Header.jsx';
import useBuildingMethods from '../../hooks/useBuildingMethods.js';
import { useBuildingContext } from '../../contexts/BuildingContext.jsx';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { buildings } = useBuildingContext();
  const { checkIfAuthenticated } = useAuthMethods();
  const { handleGetAllBuildingsAsync } = useBuildingMethods();
  
  const fetchData = async () => {
    const isAuthenticated = checkIfAuthenticated();
    if (isAuthenticated) {
      await handleGetAllBuildingsAsync();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Header/>
      <div className={styles.pageContentContainer}>
        <div className={styles.titleContainer}>
          <button onClick={() => setIsModalOpen(true)} className={styles.addButton}>Add</button>
          <h2 className={styles.title}>Buildings</h2>
        </div>
        <div className={styles.tableContainer}>
        <BuildingDataGrid dataGridData={buildings} />
        </div>
        <BuildingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
    </div>
    
  );
};

export default HomePage;
