/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of TransactionsCashinRequest
 */
class TransactionsCashinRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.clientIdentifier = this.constructor.getValue(obj.clientIdentifier);
        this.amount = this.constructor.getValue(obj.amount);
        this.location = this.constructor.getValue(obj.location);
        this.externalId = this.constructor.getValue(obj.externalId);
        this.externalData = this.constructor.getValue(obj.externalData);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'clientIdentifier', realName: 'clientIdentifier', type: 'ClientIdentifier' },
            { name: 'amount', realName: 'amount', type: 'Amount' },
            { name: 'location', realName: 'location', type: 'Geolocation' },
            { name: 'externalId', realName: 'externalId' },
            { name: 'externalData', realName: 'externalData' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = TransactionsCashinRequest;
