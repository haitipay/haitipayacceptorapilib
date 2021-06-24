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

class AuthenticationController {
    /**
     * Should be called when requested authentication mode is `PINCODE_ACCEPTOR`
     *
     * @param {string} transactionToken TODO: type description here
     * @param {AuthenticationsPincodeAcceptorVerifyRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateVerifyAcceptorPincode(transactionToken, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/authentications/{transactionToken}/pincode-acceptor/verify';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            transactionToken: { value: transactionToken, encode: true },
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return AuthenticationController.updateVerifyAcceptorPincodeAction(
                _queryUrl,
                _callback,
                body);
        }
        return _oAuthManager.authorize().then(
            () => AuthenticationController.updateVerifyAcceptorPincodeAction(
                _queryUrl,
                _callback,
                body),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static updateVerifyAcceptorPincodeAction(_queryUrl, _callback, body) {
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
                        .mapObject(parsed, 'AuthenticationsPincodeAcceptorVerifyResponse');
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
     * Should be called when requested authentication mode is `PINCODE_CLIENT`
     *
     * @param {string} transactionToken TODO: type description here
     * @param {AuthenticationsPincodeClientVerifyRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateVerifyClientPincode(transactionToken, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/authentications/{transactionToken}/pincode-client/verify';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            transactionToken: { value: transactionToken, encode: true },
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return AuthenticationController.updateVerifyClientPincodeAction(
                _queryUrl,
                _callback,
                body);
        }
        return _oAuthManager.authorize().then(
            () => AuthenticationController.updateVerifyClientPincodeAction(
                _queryUrl,
                _callback,
                body),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static updateVerifyClientPincodeAction(_queryUrl, _callback, body) {
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
                        .mapObject(parsed, 'AuthenticationsPincodeClientVerifyResponse');
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
     * Should be called when requested authentication mode is `PINCODE_CLIENT_IVR`.
     * This endpoint uses [Server Sent Events](#section/Server-Sent-Events)
     *
     * @param {string} transactionToken TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateVerifyPincodeClientIVR(transactionToken, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/authentications/{transactionToken}/pincode-client-ivr/verify';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            transactionToken: { value: transactionToken, encode: true },
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return AuthenticationController.updateVerifyPincodeClientIVRAction(
                _queryUrl,
                _callback);
        }
        return _oAuthManager.authorize().then(
            () => AuthenticationController.updateVerifyPincodeClientIVRAction(_queryUrl, _callback),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static updateVerifyPincodeClientIVRAction(_queryUrl, _callback) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
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
                            _callback(null, _response.body, _context);
                            _fulfill(_response.body);
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
     * Should be called when requested authentication mode is `OTP_CLIENT`
     *
     * @param {string} transactionToken TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSendClientOTP(transactionToken, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/authentications/{transactionToken}/otp-client/send';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            transactionToken: { value: transactionToken, encode: true },
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return AuthenticationController.updateSendClientOTPAction(_queryUrl, _callback);
        }
        return _oAuthManager.authorize().then(
            () => AuthenticationController.updateSendClientOTPAction(_queryUrl, _callback),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static updateSendClientOTPAction(_queryUrl, _callback) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
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
                            _callback(null, null, _context);
                            _fulfill();
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
     * Should be called when requested authentication mode is `OTP_CLIENT`, after that OTP was
     * sent
     *
     * @param {string} transactionToken TODO: type description here
     * @param {AuthenticationsOtpClientVerifyRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateVerifyClientOTP(transactionToken, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/authentications/{transactionToken}/otp-client/verify';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            transactionToken: { value: transactionToken, encode: true },
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return AuthenticationController.updateVerifyClientOTPAction(_queryUrl, _callback, body);
        }
        return _oAuthManager.authorize().then(
            () => AuthenticationController.updateVerifyClientOTPAction(_queryUrl, _callback, body),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static updateVerifyClientOTPAction(_queryUrl, _callback, body) {
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
                        .mapObject(parsed, 'AuthenticationsOtpClientVerifyResponse');
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
     * Should be called when requested authentication mode is `NSDT_CLIENT`.
     * This endpoint uses [Server Sent Events](#section/Server-Sent-Events)
     * When event call status is `CONNECTED`, the API Client should start playing NSDT token.
     * When event call status is in `SUCCESS`, `HANG_UP`, `TIMEOUT`, the API Client should stop
     * playing NSDT token.
     *
     * @param {string} transactionToken TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateVerifyNSDT(transactionToken, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/authentications/{transactionToken}/nsdt/verify';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            transactionToken: { value: transactionToken, encode: true },
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return AuthenticationController.updateVerifyNSDTAction(_queryUrl, _callback);
        }
        return _oAuthManager.authorize().then(
            () => AuthenticationController.updateVerifyNSDTAction(_queryUrl, _callback),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static updateVerifyNSDTAction(_queryUrl, _callback) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
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
                            _callback(null, _response.body, _context);
                            _fulfill(_response.body);
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
     * Should be called when requested authentication mode is `QR_CODE_CLIENT`.
     * This endpoint uses [Server Sent Events](#section/Server-Sent-Events)
     *
     * @param {string} transactionToken TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateVerifyQrCode(transactionToken, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/authentications/{transactionToken}/qr-code/verify';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            transactionToken: { value: transactionToken, encode: true },
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return AuthenticationController.updateVerifyQrCodeAction(_queryUrl, _callback);
        }
        return _oAuthManager.authorize().then(
            () => AuthenticationController.updateVerifyQrCodeAction(_queryUrl, _callback),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static updateVerifyQrCodeAction(_queryUrl, _callback) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
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
                            _callback(null, _response.body, _context);
                            _fulfill(_response.body);
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
     * Can cancel an ongoing transaction
     *
     * @param {string} transactionToken TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteCancelTransaction(transactionToken, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/authentications/{transactionToken}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            transactionToken: { value: transactionToken, encode: true },
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        if (_oAuthManager.isTokenSet()) {
            return AuthenticationController.deleteCancelTransactionAction(_queryUrl, _callback);
        }
        return _oAuthManager.authorize().then(
            () => AuthenticationController.deleteCancelTransactionAction(_queryUrl, _callback),
            (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
    }
    static deleteCancelTransactionAction(_queryUrl, _callback) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            'user-agent': 'APIMATIC 2.0',
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'DELETE',
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
                            _callback(null, null, _context);
                            _fulfill();
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
module.exports = AuthenticationController;
