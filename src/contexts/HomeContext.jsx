import { createContext, useState, useContext } from "react";
import { createBuilding, deleteBuilding, getAllBuildings } from '../services/buildingService.js';
import { getAllNotBuiltBuildingTypes } from '../services/buildingTypeService.js';

export const HomeContext = createContext()

export const HomeProvider = ({children}) => {
    const [buildings, setBuildings] = useState([]);
    const [notBuiltBuildingTypes, setNotBuiltBuildingTypes] = useState([]);
    const [buildingType, setBuildingType] = useState('');
    const [buildingTypeId, setBuildingTypeId] = useState('');
    const [constructionTime, setConstructionTime] = useState('');
    const [buildingCost, setBuildingCost] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateBuilding = async (constructionTime, buildingCost, buildingTypeId, buildingType) => {
        try {
            const data = await createBuilding(constructionTime, buildingCost, buildingTypeId, buildingType);
            console.log(data.message);
        } catch (error) {
            console.error(error);
        }
    };

    const handleGetAllBuildings = async () => {
        try {
            const data = await getAllBuildings();
            if(data.isSuccess)
            {
                setBuildings(data.data);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleGetAllNotBuiltBuildingTypes = async () => {
        try {
            const data = await getAllNotBuiltBuildingTypes();
            if(data.isSuccess)
                {
                    setNotBuiltBuildingTypes(data.data);
                }
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleDeleteBuilding = async (id) => {
        try {
            await deleteBuilding(id);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <HomeContext.Provider value={{
            buildings, notBuiltBuildingTypes, handleCreateBuilding,
            handleDeleteBuilding, handleGetAllBuildings, handleGetAllNotBuiltBuildingTypes,
            setBuildingCost, setConstructionTime, setBuildingType, setBuildingTypeId,
            buildingCost, constructionTime, buildingType, buildingTypeId, isModalOpen, setIsModalOpen }}>
            {children}
        </HomeContext.Provider>
    )
}

export const useHomeContext = () => {
    return useContext(HomeContext);
};