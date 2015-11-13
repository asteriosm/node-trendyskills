'use strict';

function buildKeyIds(_keyIds) {
    var keysQuery = '';
    for (var keyId in _keyIds) {
        if (_keyIds.hasOwnProperty(keyId)) {
            keysQuery += '&keyID[]=' + _keyIds[keyId];
        }
    }
    return keysQuery;
}

function buildCatIds(_catIds) {
    var catsQuery = '';
    for (var catId in _catIds) {
        if (_catIds.hasOwnProperty(catId)) {
            catsQuery += '&catID[]=' + _catIds[catId];
        }
    }
    return catsQuery;
}

function build(setings) {
    var url = setings.url + 'q=' + setings.qQuery;
    if (setings.qQuery === 'keywords' || setings.qQuery === 'categories') {
        url += '&like=' + setings.qLike + setings.qFilterAmbiguous;
    }
    if (setings.qQuery === 'keywordNoDate') {
        url += buildKeyIds(setings.qKeyIDs) + setings.qFilterAmbiguous;
    }
    if (setings.qQuery === 'keywordDate') {
        url += buildKeyIds(setings.qKeyIDs) + '&dateFrom=' + setings.qFromDate + '&dateTo=' +
            setings.qToDate + setings.qFilterAmbiguous + setings.qAnalyticDate;
    }
    if (setings.qQuery === 'categoryNoDate') {
        url += buildCatIds(setings.qCatIDs) + setings.qFilterAmbiguous;
    }
    if (setings.qQuery === 'categoryDate') {
        url += buildCatIds(setings.qCatIDs) + '&dateFrom=' + setings.qFromDate + '&dateTo=' +
            setings.qToDate + setings.qFilterAmbiguous + setings.qAnalyticDate;
    }
    return url + '&key=' + setings.qKey;
}

module.exports = {
    buildKeyIds: buildKeyIds,
    buildCatIds: buildCatIds,
    build: build
};
