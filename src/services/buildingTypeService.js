import axios from 'axios';

const getAllNotBuilt = async () => {
    try {
        const response = await axios.get('...building-types/not-built');
        return response.data.Data;
    } catch (error) {
        const errorMessage = error.response && error.response.data
            ? error.response.data.Message || 'An error occurred'
            : 'An error occurred';
        throw new Error(errorMessage);
    }
};

export {getAllNotBuilt};