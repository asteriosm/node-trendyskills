'use strict';

var request = require('request');
var urlBuildr = require('./urlBuildr');

module.exports = function(_key) {
    return {
        qQuery: '',
        qLike: '',
        qKey: _key,
        url: 'http://www.trendyskills.com/service?',
        qKeyIDs: [],
        qCatIDs: [],
        qFromDate: '',
        qToDate: '',
        qFilterAmbiguous: '&filterAmbiguous=true',
        qAnalyticDate: '&analyticDate=false',

        categories: function() {
            this.qQuery = 'categories';
            return this;
        },

        status: function() {
            this.qQuery = 'status';
            return this;
        },

        keywordNoDate: function() {
            this.qQuery = 'keywordNoDate';
            return this;
        },

        keywordDate: function() {
            this.qQuery = 'keywordDate';
            return this;
        },

        apiKey: function(_apiKey) {
            this.qKey = _apiKey;
            return this;
        },

        keywords: function() {
            this.qQuery = 'keywords';
            return this;
        },

        categoryNoDate: function() {
            this.qQuery = 'categoryNoDate';
            return this;
        },

        categoryDate: function() {
            this.qQuery = 'categoryDate';
            return this;
        },

        filterAmbiguous: function(_bool) {
            this.qFilterAmbiguous = '&filterAmbiguous=' + _bool;
            return this;
        },

        analyticDate: function(_bool) {
            this.qAnalyticDate = '&filterAmbiguous=' + _bool;
            return this;
        },

        keyID: function(_id) {
            this.qKeyIDs.push(_id);
            return this;
        },

        catID: function(_id) {
            this.qCatIDs.push(_id);
            return this;
        },

        like: function(_like) {
            this.qLike = _like;
            return this;
        },

        fromDate: function(_fromDate) {
            this.qFromDate = _fromDate;
            return this;
        },

        toDate: function(_toDate) {
            this.qToDate = _toDate;
            return this;
        },

        get: function() {
            return new Promise((resolve, reject) => {
                var url = urlBuildr.build(this);
                request({
                    method: 'GET',
                    url: url
                }, (error, response, body) => {
                    if (error) {
                        reject('Error while fetching website. ' + error);
                    } else {
                        resolve(JSON.parse(body));
                    }
                });
            });
        }
    };
};
