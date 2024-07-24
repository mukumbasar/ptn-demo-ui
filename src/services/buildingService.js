import axios from 'axios';

const createBuilding = async (constructionTime, constructionCost, buildingTypeId) => {
    try {
        const response = await axios.post('...building', {
            ConstructionTime: constructionTime,
            ConstructionCost: constructionCost,
            BuildingTypeId: buildingTypeId
        });
        return response.data.Message;
    } catch (error) {
        const errorMessage = error.response && error.response.data
            ? error.response.data.Message || 'An error occurred'
            : 'An error occurred';
        throw new Error(errorMessage);
    }
};

const deleteBuilding = async (id) => {
    try {
        const response = await axios.delete('...building', {
            Id: id
        });
        return response.data.Message;
    } catch (error) {
        const errorMessage = error.response && error.response.data
            ? error.response.data.Message || 'An error occurred'
            : 'An error occurred';
        throw new Error(errorMessage);
    }
};

export {createBuilding, deleteBuilding};