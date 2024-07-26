import { createContext, useState, useContext } from "react";
import useBuildingMethods from "../hooks/useBuildingMethods";

export const BuildingContext = createContext()

export const BuildingProvider = ({children}) => {
    const [buildings, setBuildings] = useState([]);
    const [notBuiltBuildingTypes, setNotBuiltBuildingTypes] = useState([]);
    
    const [buildingType, setBuildingType] = useState('');
    const [buildingTypeId, setBuildingTypeId] = useState('');
    const [constructionTime, setConstructionTime] = useState('');
    const [buildingCost, setBuildingCost] = useState('');

    return (
        <BuildingContext.Provider value={{
            buildings, notBuiltBuildingTypes, setBuildings, setNotBuiltBuildingTypes,
            setBuildingCost, setConstructionTime, setBuildingType, setBuildingTypeId,
            buildingCost, constructionTime, buildingType, buildingTypeId }}>
            {children}
        </BuildingContext.Provider>
    )
}

export const useBuildingContext = () => {
    return useContext(BuildingContext);
};