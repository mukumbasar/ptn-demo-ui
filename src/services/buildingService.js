import axios from 'axios';

const createBuilding = (constructionTime, constructionCost, buildingTypeId) => {
    return new Promise((resolve, reject) => {
        axios.post('...building/create', {
            ConstructionTime: constructionTime,
            ConstructionCost: constructionCost,
            BuildingTypeId: buildingTypeId
        })
        .then(response => {
                resolve(response.data.Message);
        })
        .catch(error => {
            const errorMessage = error.response.data
                ? error.response.data.Message || 'An error occurred'
                : 'An error occurred';
            reject(new Error(errorMessage));
        });
    });
};

const deleteBuilding = (id) => {
    return new Promise((resolve, reject) => {
        axios.post('...building/delete', {
            Id : id
        })
        .then(response => {
                resolve(response.data.Message);
        })
        .catch(error => {
            const errorMessage = error.response.data
                ? error.response.data.Message || 'An error occurred'
                : 'An error occurred';
            reject(new Error(errorMessage));
        });
    });
};

export {createBuilding, deleteBuilding};