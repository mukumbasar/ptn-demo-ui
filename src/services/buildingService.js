import axios from 'axios';

const getToken = () => axios.defaults.headers.common['Authorization'];

const createBuilding = async (constructionTime, buildingCost, buildingTypeId, buildingType) => {
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
                'Authorization': `${getToken()}`
            }
        });
        
        return response.data.message || 'Building Creation Success';
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Building Creation Error';
        return errorMessage;
    }
};

const deleteBuilding = async (id) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `https://ptndemoapi.azurewebsites.net/buildings/${id}`,
            headers: {
                'Authorization': `${getToken()}`
            }
        });
        
        return response.data.message || 'Building Deletion Success';
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Building Deletion Error';
        throw new Error(errorMessage);
    }
};

const getAllBuildings = async () => {
    try {
        const response = await axios.get('https://ptndemoapi.azurewebsites.net/buildings', {
            headers: {
                'Authorization': `${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Building Retrieval Error';
        throw new Error(errorMessage);
    }
};

const getAllNotBuiltBuildingTypes = async () => {
    try {
        const response = await axios.get('https://ptndemoapi.azurewebsites.net/building-types/not-built', {
            headers: {
                'Authorization': `${getToken()}`
            }
        });

        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Building Type Retrieval Error';
        throw new Error(errorMessage);
    }
};

export { createBuilding, deleteBuilding, getAllBuildings, getAllNotBuiltBuildingTypes };