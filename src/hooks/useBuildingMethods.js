import { useBuildingContext } from '../contexts/BuildingContext.jsx';
import { createBuildingAsync, deleteBuildingAsync,
     getAllBuildingsAsync, getAllNotBuiltBuildingTypesAsync } from '../services/buildingService.js';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';


const useBuildingMethods = () =>
{
    const {setBuildings, setNotBuiltBuildingTypes, buildings,
            buildingCost, constructionTime, buildingTypeId, buildingType
    } = useBuildingContext();

    const token = Cookies.get('jwt');

    const handleCreateBuildingAsync = async () => {
        try {
            const message = await createBuildingAsync(constructionTime, buildingCost, 
            buildingTypeId, buildingType, token);
            toast.success(message);
            await handleGetAllBuildingsAsync();
        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleDeleteBuildingAsync = async (id) => {
        try {
           const message = await deleteBuildingAsync(id, token);
           setBuildings(prevBuildings => prevBuildings.filter(building => building.id !== id));
           toast.success(message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleGetAllBuildingsAsync = async () => {
        try {
           const output = await getAllBuildingsAsync(token);
           setBuildings(output.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleGetAllNotBuiltBuildingTypesAsync = async () => {
        try {
           const output = await getAllNotBuiltBuildingTypesAsync(token);
           setNotBuiltBuildingTypes(output.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return { handleCreateBuildingAsync, handleDeleteBuildingAsync, 
        handleGetAllBuildingsAsync, handleGetAllNotBuiltBuildingTypesAsync };
}

export default useBuildingMethods;