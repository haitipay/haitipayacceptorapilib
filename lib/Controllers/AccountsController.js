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

class AccountsController {
    /**
     * Search accounts
     *
     * @param {string} id (optional) insert HaitiPay Account Number format 11 digits = ex:
     * 10000015205
     * @param {string} iban (optional) Account information in IBAN format:  FR791680810000000538
     * @param {string} bic (optional) Account information in BIC format 9 -11 Letters:
     * BNCHHTPPXXX
     * @param {array} status (optional) OPEN, BLOCKED, CLOSED,
     * @param {string} type (optional) type of account =CURRENT, SAVINGS or DEDICATED
     * @param {int} offset (optional) Pagination page number
     * @param {int} limit (optional) The number of items per page
     * @param {string} sort (optional) Field to define the sort order. To indicate sorting
     * direction, ascending (oldest first) fields may be prefixed with +.
     * Descending (newer first) fields may be prefixed with -
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static searchAccounts(id, iban, bic, status, type, offset, limit, sort, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/accounts';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            id,
            iban,
            bic,
            status: (status !== null) ? status : null,
            type,
            offset: (offset !== null) ? offset : 0,
            limit: (limit !== null) ? limit : 20,
            sort: (sort !== null) ? sort : 'id',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return AccountsController.searchAccountsAction(
                _queryUrl,
                _callback,
                id,
                iban,
                bic,
                status,
                type,
                offset,
                limit,
                sort);
        }
        return _oAuthManager.authorize().then(
            () => AccountsController.searchAccountsAction(
                _queryUrl,
                _callback,
                id,
                iban,
                bic,
                status,
                type,
                offset,
                limit,
                sort),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static searchAccountsAction(
        _queryUrl,
        _callback,
        id,
        iban,
        bic,
        status,
        type,
        offset,
        limit,
        sort) {
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
                            parsed = _baseController.getObjectMapper().mapObject(parsed, 'AccountCollection');
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
     * Search client accounts
     *
     * @param {string} clientId insert client id ex: 1421 * (can be obtained by looking up client
     * profile with Search Client EndPoint using Client Phone Number or
     * Identification Number Gov. ID card, Passport, SSN)
     * @param {string} id (optional) HaitiPay Account *11 Digits ex: 10000015205
     * @param {string} iban (optional) Account information in IBAN format: ex:
     * FR791680810000000538
     * @param {string} bic (optional) Account information in BIC format 9 -11 Letters:
     * BNCHHTPPXXX
     * @param {array} status (optional) Status of the Account  ex: OPENED , CLOSED, BLOCKED
     * @param {string} type (optional) type of  HaitiPay Account ** Exemple: CURRENT, DEDICATED
     * @param {int} offset (optional) Pagination page number
     * @param {int} limit (optional) The number of items per page
     * @param {string} sort (optional) Field to define the sort order. To indicate sorting
     * direction, ascending (oldest first) fields may be prefixed with +.
     * Descending (newer first) fields may be prefixed with -
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static searchClientAccounts(clientId,
        id,
        iban,
        bic,
        status,
        type,
        offset,
        limit,
        sort,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/clients/{clientId}/accounts';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            clientId: { value: clientId, encode: true },
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            id,
            iban,
            bic,
            status: (status !== null) ? status : null,
            type,
            offset: (offset !== null) ? offset : 0,
            limit: (limit !== null) ? limit : 20,
            sort: (sort !== null) ? sort : 'id',
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return AccountsController.searchClientAccountsAction(
                _queryUrl,
                _callback,
                id,
                iban,
                bic,
                status,
                type,
                offset,
                limit,
                sort);
        }
        return _oAuthManager.authorize().then(
            () => AccountsController.searchClientAccountsAction(
                _queryUrl,
                _callback,
                id,
                iban,
                bic,
                status,
                type,
                offset,
                limit,
                sort),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static searchClientAccountsAction(
        _queryUrl,
        _callback,
        id,
        iban,
        bic,
        status,
        type,
        offset,
        limit,
        sort) {
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
                            parsed = _baseController.getObjectMapper().mapObject(parsed, 'AccountCollection');
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
module.exports = AccountsController;
