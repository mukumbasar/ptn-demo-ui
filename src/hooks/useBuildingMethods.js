import { useBuildingContext } from '../contexts/BuildingContext.jsx';
import { createBuildingAsync, deleteBuildingAsync,
     getAllBuildingsAsync, getAllNotBuiltBuildingTypesAsync } from '../services/buildingService.js';
import { toast } from 'react-toastify';

const useBuildingMethods = () =>
{
    const {setBuildings, setNotBuiltBuildingTypes,
            buildingCost, constructionTime, buildingTypeId, buildingType
    } = useBuildingContext();

    const handleCreateBuildingAsync = async () => {
        try {
           const message = await createBuildingAsync(constructionTime, buildingCost, buildingTypeId, buildingType);
           toast.success(message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleDeleteBuildingAsync = async (id) => {
        try {
           const message = await deleteBuildingAsync(id);
           toast.success(message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleGetAllBuildingsAsync = async () => {
        try {
           const output = await getAllBuildingsAsync();
           setBuildings(output.data);
           console.log(output.message);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleGetAllNotBuiltBuildingTypesAsync = async () => {
        try {
           const output = await getAllNotBuiltBuildingTypesAsync();
           setNotBuiltBuildingTypes(output.data);
           console.log(output.message);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return { handleCreateBuildingAsync, handleDeleteBuildingAsync, 
        handleGetAllBuildingsAsync, handleGetAllNotBuiltBuildingTypesAsync };
}

export default useBuildingMethods;