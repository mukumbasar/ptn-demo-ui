import React, { useEffect } from 'react';
import styles from './BuildingModal.module.css';
import { useBuildingContext } from '../../../../contexts/BuildingContext.jsx';
import useBuildingMethods from '../../../../hooks/useBuildingMethods.js';

const BuildingModal = ({ isOpen, onClose }) => {
  const { notBuiltBuildingTypes, setBuildingCost, setConstructionTime, setBuildingType, 
    buildingCost, constructionTime, buildingType, setBuildingTypeId } = useBuildingContext();
  const { handleGetAllNotBuiltBuildingTypesAsync, handleCreateBuildingAsync} = useBuildingMethods();
  
  const fetchData = async () => 
    {
      if (isOpen) {
        await handleGetAllNotBuiltBuildingTypesAsync();
      }
    }

  const handleSubmit = async () => {
      await handleCreateBuildingAsync();
      handleOnClose();
    };

  useEffect(() => {
    fetchData();
    }, [isOpen]);

  
  const handleOnClose = () => {
    onClose();
    setBuildingCost('');
    setConstructionTime('');
    setBuildingType('');
    setBuildingTypeId(null);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Add Building</h2>
        <form>
          <input 
            type="text" 
            value={constructionTime} 
            onChange={(e) => setConstructionTime(e.target.value)} 
            placeholder="Construction Time" 
            className={styles.inputField}
          />
          <input 
            type="text" 
            value={buildingCost} 
            onChange={(e) => setBuildingCost(e.target.value)} 
            placeholder="Building Cost" 
            className={styles.inputField}
          />
          <select 
            value={buildingType} 
            onChange={(e) => {
              setBuildingType(e.target.value);
              const id = notBuiltBuildingTypes.find(type => type.name === e.target.value)?.id;
              setBuildingTypeId(id);
            }} 
            className={styles.inputField}
          >
            <option value="">Select Building Type</option>
            {notBuiltBuildingTypes.map(type => (
              <option key={type.id} value={type.name}>{type.name}</option>
            ))}
          </select>
          <button type="button" onClick={handleSubmit} className={styles.saveButton}>Save</button>
          <button type="button" onClick={handleOnClose} className={styles.cancelButton}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default BuildingModal;
