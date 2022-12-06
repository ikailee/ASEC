const axios = require('axios');

const swapiModel = {
    get: async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    getByPageId: async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error)  {
            console.error(error);
        }
    },
    getByName: async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error)  {
            console.error(error);
        }
    },
    getByNamePage: async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error)  {
            console.error(error);
        }
    }
};

module.exports = swapiModel;