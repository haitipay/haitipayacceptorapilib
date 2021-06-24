/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const APIException = require('./APIException');
/**
 * Creates an instance of Accounts0ErrorException
 */
class Accounts0ErrorException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * TODO: Write general description for this field
         */
        this.error = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'error', realName: 'error', type: 'MError' },
        ]);
    }
}

module.exports = Accounts0ErrorException;
