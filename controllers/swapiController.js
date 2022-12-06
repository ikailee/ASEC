const urlUtil = require('../utils/urlUtil');
const swapiModel = require('../models/swapiModel');
const extraModel = require('../models/extraModel');
const axios = require('axios');

const config = {
    baseUrl: 'https://swapi.dev/api/people/'
};

const swapiController = {
    get: async (req, res) => {
        let url = urlUtil.appendUrlParameter(config.baseUrl, 'page', 1);
        let response = await swapiModel.get(url);

        res.render('index', { 
            data: response, 
            previousPage: null,
            currentPage: 1,
            nextPage: urlUtil.getUrlParameter(response.next, 'page')
        });
    },
    getByPageId: async (req, res) => {
        let url = urlUtil.appendUrlParameter(config.baseUrl, 'page', req.params.id);
        let response = await swapiModel.getByPageId(url);

        res.render('index', { 
            data: response, 
            previousPage: urlUtil.getUrlParameter(response.previous, 'page'), 
            currentPage: req.params.id,
            nextPage: urlUtil.getUrlParameter(response.data.next, 'page') 
        })
    },
    getByName: async (req, res) => {
        let url = urlUtil.appendUrlParameter(config.baseUrl, 'search', req.query.name);
        let response = await swapiModel.getByName(url);
        let extra = extraModel.getByName(req.query.name);
        if (extra != null) {
            response.count = parseInt(response.count) + 1;
            response.results.push(extra);
        }

        res.render('search', { 
            data: response, 
            previousPage: urlUtil.getUrlParameter(response.previous, 'page'),
            currentPage: 1,
            nextPage: urlUtil.getUrlParameter(response.next, 'page'),
            name: req.query.name
        })
    },
    getByNamePage: async (req, res) => {
        let url = urlUtil.appendUrlParameter(config.baseUrl, 'search', req.params.name);
        url = urlUtil.appendUrlParameter(url, 'page', req.params.page);
        let response = await swapiModel.getByNamePage(url);

        res.render('search', { 
            data: response, 
            previousPage: urlUtil.getUrlParameter(response.previous, 'page'), 
            currentPage: req.params.page,
            nextPage: urlUtil.getUrlParameter(response.next, 'page'),
            name: req.params.name
        })
    }
};

module.exports = swapiController;