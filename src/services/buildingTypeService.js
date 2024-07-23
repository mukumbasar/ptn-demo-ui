import axios from 'axios';

const getAllNotBuilt = () => {
    return new Promise((resolve, reject) => {
        axios.get('...building-types/not-built')
        .then(response => {
                resolve(response.data.Data);
        })
        .catch(error => {
            const errorMessage = error.response.data
                ? error.response.data.Message || 'An error occurred'
                : 'An error occurred';
            reject(new Error(errorMessage));
        });
    });
};

export {getAllNotBuilt};