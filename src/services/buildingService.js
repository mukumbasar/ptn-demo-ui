import axios from 'axios';

const createBuildingAsync = async (constructionTime, buildingCost, buildingTypeId, buildingType, token) => {
    try {
        const formData = new FormData();
        formData.append('ConstructionTime', constructionTime);
        formData.append('BuildingCost', buildingCost);
        formData.append('BuildingTypeId', buildingTypeId);
        formData.append('BuildingType', buildingType);
        
        const response = await axios({
            method: 'POST',
            url: 'https://ptndemoapi.azurewebsites.net/buildings',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
        
        return response.data.message || 'Creation Success';
    } catch (error) {
        console.log(error);
        const errorMessage = error.response?.data?.message || 'Creation Error';
        throw new Error(errorMessage);
    }
};

const deleteBuildingAsync = async (id, token) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `https://ptndemoapi.azurewebsites.net/buildings/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        return response.data.message || 'Deletion Success';
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Deletion Error';
        throw new Error(errorMessage);
    }
};

const getAllBuildingsAsync = async (token) => {
    try {
        const response = await axios.get('https://ptndemoapi.azurewebsites.net/buildings', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Retrieval Error';
        throw new Error(errorMessage);
    }
};

const getAllNotBuiltBuildingTypesAsync = async (token) => {
    try {
        const response = await axios.get('https://ptndemoapi.azurewebsites.net/building-types/not-built', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Retrieval Error';
        throw new Error(errorMessage);
    }
};

export { createBuildingAsync, deleteBuildingAsync, getAllBuildingsAsync, getAllNotBuiltBuildingTypesAsync };