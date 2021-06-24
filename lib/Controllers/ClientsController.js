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

class ClientsController {
    /**
     * Search for a client
     *
     * @param {string} phone (optional) the client mobile phone number format ex: 50937027447
     * @param {string} idNumber (optional) the client identity number National ID card ex:
     * 123456789
     * @param {string} externalId (optional) the client l identifier from External  Third Party
     * System ex: EXTSYSID123
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static searchClients(phone, idNumber, externalId, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/clients';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            phone,
            idNumber,
            externalId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return ClientsController.searchClientsAction(
                _queryUrl,
                _callback,
                phone,
                idNumber,
                externalId);
        }
        return _oAuthManager.authorize().then(
            () => ClientsController.searchClientsAction(
                _queryUrl,
                _callback,
                phone,
                idNumber,
                externalId),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static searchClientsAction(_queryUrl, _callback, phone, idNumber, externalId) {
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
                            let parsed = JSON.parse(_response.body);
                            parsed = _baseController.getObjectMapper().mapObject(parsed, 'Client');
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
module.exports = ClientsController;
