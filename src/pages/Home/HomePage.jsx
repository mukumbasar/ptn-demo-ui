import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import DataGrid from '../../components/DataGrid/DataGrid.jsx';
import BuildingModal from '../../components/PageSpecific/home/BuildingModal/BuildingModal.jsx';
import useAuthMethods from '../../hooks/useAuthMethods.js';
import useBuildingMethods from '../../hooks/useBuildingMethods.js';
import { useBuildingContext } from '../../contexts/BuildingContext.jsx';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { buildings, buildingDataGridColumns } = useBuildingContext();
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
      <div className={styles.headerContainer}>
        <button onClick={() => setIsModalOpen(true)} className={styles.addButton}>Add</button>
        <h2 className={styles.headerTitle}>Buildings</h2>
      </div>
      <div className={styles.tableContainer}>
        <DataGrid dataGridData={buildings} />
      </div>
      <BuildingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePage;