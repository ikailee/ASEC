const urlUtil = require('../utils/urlUtil');
const extraModel = require('../models/extraModel');
const axios = require('axios');

const config = {
    baseUrl: 'https://swapi.dev/api/people/'
};

const swapiController = {
    get: (req, res) => {
        let url = urlUtil.appendUrlParameter(config.baseUrl, 'page', 1);
        axios.get(url)
            .then(response => {
                const next = urlUtil.getUrlParameter(response.data.next, 'page');
                res.render('index', { 
                    data: response.data, 
                    previousPage: null,
                    currentPage: 1,
                    nextPage: next
                })
            })
            .catch(error => console.error(error)); 
    },
    getByPageId: (req, res) => {
        let url = urlUtil.appendUrlParameter(config.baseUrl, 'page', req.params.id);
        axios.get(url)
            .then(response => {
                res.render('index', { 
                    data: response.data, 
                    previousPage: urlUtil.getUrlParameter(response.data.previous, 'page'), 
                    currentPage: req.params.id,
                    nextPage: urlUtil.getUrlParameter(response.data.next, 'page') 
                })
            })
            .catch(error => console.error(error));
    },
    getByName: (req, res) => {
        let url = urlUtil.appendUrlParameter(config.baseUrl, 'search', req.query.name);
        axios.get(url)
            .then(response => {
                const extra = extraModel.getByName(req.query.name);
                if (extra != null) {
                    response.data.count = parseInt(response.data.count) + 1;
                    response.data.results.push(extra);
                }
                    
                res.render('search', { 
                    data: response.data, 
                    previousPage: urlUtil.getUrlParameter(response.data.previous, 'page'),
                    currentPage: 1,
                    nextPage: urlUtil.getUrlParameter(response.data.next, 'page'),
                    name: req.query.name
                })
            })
            .catch(error => console.error(error));
    },
    getByNamePage: (req, res) => {
        let url = urlUtil.appendUrlParameter(config.baseUrl, 'search', req.params.name);
        url = urlUtil.appendUrlParameter(url, 'page', req.params.page);
        axios.get(url)
            .then(response => {
                res.render('search', { 
                    data: response.data, 
                    previousPage: urlUtil.getUrlParameter(response.data.previous, 'page'), 
                    currentPage: req.params.page,
                    nextPage: urlUtil.getUrlParameter(response.data.next, 'page'),
                    name: req.params.name
                })
            })
            .catch(error => console.error(error));
    }
};

module.exports = swapiController;