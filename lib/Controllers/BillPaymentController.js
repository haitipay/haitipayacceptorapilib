/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _oAuthManager = require('../OAuthManager');

class BillPaymentController {
    /**
     * Bill issuers list
     *
     * @param {string} billItemId (optional) root item to use to get a subset of this tree
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static loadBillerTree(billItemId, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/billers';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            billItemId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return BillPaymentController.loadBillerTreeAction(_queryUrl, _callback, billItemId);
        }
        return _oAuthManager.authorize().then(
            () => BillPaymentController.loadBillerTreeAction(_queryUrl, _callback, billItemId),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static loadBillerTreeAction(_queryUrl, _callback, billItemId) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return oauthTokenPromise
            .then(() =>
                new Promise((_fulfill, _reject) => {
                    _request(_options, (_error, _response, _context) => {
                        let errorResponse;
                        if (_error) {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                            const parsed = JSON.parse(_response.body);
                            _callback(null, parsed, _context);
                            _fulfill(parsed);
                        } else {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        }
                    });
                }))
            .catch((err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    /**
     * <details>
     * <summary>An example of paybill call flow (click to expand)</summary>
     * 
     * ```js
     * function paybill(apiClient, billIssuerId, clientIdentifier) {
     * // initiate paybill transaction
     * let response = apiClient.post("/transactions/paybill", {billIssuerId: billIssuerId,
     * clientIdentifier: clientIdentifier});
     * let transactionToken = response.body.transactionToken;
     * let userSubmittedValues = null;
     * 
     * // making multiple preauth
     * while(true) {
     * response = apiClient.patch("/transactions/paybill/" + transactionToken, {inputs:
     * userSubmittedValues});
     * if (response.code === 201) {
     * break;
     * }
     * userSubmittedValues = askUserInput(response.body.inputs);
     * }
     * 
     * // making authentification
     * makeAuth(transactionToken)
     * 
     * // making transaction
     * apiClient.post("/transactions/paybill/" + transactionToken);
     * }
     * 
     * function askUserInput(inputs) {
     * // ui logic to ask user to fill inputs
     * }
     * 
     * function makeAuth(transactionToken)
     * {
     * // logic to make authentication
     * }
     * ```
     * </details>
     *
     * @param {object} body Example: {   "paybillType": "CASH",   "billIssuerId": "1414",
     * "clientIdentifier": {     "type": "ID",     "value": "1421"   },
     * "location": {     "latitude": 0,     "longitude": 0   },   "externalId":
     * "EXT123456789",   "externalData": {} }
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createInitPaybill(body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/transactions/paybill';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return BillPaymentController.createInitPaybillAction(_queryUrl, _callback, body);
        }
        return _oAuthManager.authorize().then(
            () => BillPaymentController.createInitPaybillAction(_queryUrl, _callback, body),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static createInitPaybillAction(_queryUrl, _callback, body) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'APIMATIC 2.0',
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return oauthTokenPromise
            .then(() =>
                new Promise((_fulfill, _reject) => {
                    _request(_options, (_error, _response, _context) => {
                        let errorResponse;
                        if (_error) {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                            let parsed = JSON.parse(_response.body);
                            parsed = _baseController.getObjectMapper().mapObject(parsed, 'TransactionsPaybillResponse');
                            _callback(null, parsed, _context);
                            _fulfill(parsed);
                        } else {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        }
                    });
                }))
            .catch((err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    /**
     * Paybill pre-authorization
     *
     * @param {string} transactionToken TODO: type description here
     * @param {TransactionsPaybillRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSubmitPaybillInfo(transactionToken, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/transactions/paybill/{transactionToken}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            transactionToken: { value: transactionToken, encode: true },
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return BillPaymentController.updateSubmitPaybillInfoAction(_queryUrl, _callback, body);
        }
        return _oAuthManager.authorize().then(
            () => BillPaymentController.updateSubmitPaybillInfoAction(_queryUrl, _callback, body),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static updateSubmitPaybillInfoAction(_queryUrl, _callback, body) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'APIMATIC 2.0',
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PATCH',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return oauthTokenPromise
            .then(() =>
                new Promise((_fulfill, _reject) => {
                    _request(_options, (_error, _response, _context) => {
                        let errorResponse;
                        if (_error) {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                            let parsed = JSON.parse(_response.body);
                            parsed = _baseController.getObjectMapper()
                        .mapObject(parsed, 'TransactionsPaybillResponse1');
                            _callback(null, parsed, _context);
                            _fulfill(parsed);
                        } else {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        }
                    });
                }))
            .catch((err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    /**
     * Paybill transaction
     *
     * @param {string} transactionToken TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createPaybill(transactionToken, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/transactions/paybill/{transactionToken}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            transactionToken: { value: transactionToken, encode: true },
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return BillPaymentController.createPaybillAction(_queryUrl, _callback);
        }
        return _oAuthManager.authorize().then(
            () => BillPaymentController.createPaybillAction(_queryUrl, _callback),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static createPaybillAction(_queryUrl, _callback) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
        };

        // build the response processing.
        return oauthTokenPromise
            .then(() =>
                new Promise((_fulfill, _reject) => {
                    _request(_options, (_error, _response, _context) => {
                        let errorResponse;
                        if (_error) {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                            let parsed = JSON.parse(_response.body);
                            parsed = _baseController.getObjectMapper()
                        .mapObject(parsed, 'TransactionsPaybillResponse2');
                            _callback(null, parsed, _context);
                            _fulfill(parsed);
                        } else {
                            errorResponse = _baseController.validateResponse(_context);
                            _callback(errorResponse.error,
                                errorResponse.response,
                                errorResponse.context);
                            _reject(errorResponse.error);
                        }
                    });
                }))
            .catch((err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
}
module.exports = BillPaymentController;
