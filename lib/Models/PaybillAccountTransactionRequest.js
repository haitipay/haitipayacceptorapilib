/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of PaybillAccountTransactionRequest
 */
class PaybillAccountTransactionRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.paybillType = this.constructor.getValue(obj.paybillType);
        this.billIssuerId = this.constructor.getValue(obj.billIssuerId);
        this.clientIdentifier = this.constructor.getValue(obj.clientIdentifier);
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
            { name: 'paybillType', realName: 'paybillType' },
            { name: 'billIssuerId', realName: 'billIssuerId' },
            { name: 'clientIdentifier', realName: 'clientIdentifier', type: 'ClientIdentifier' },
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

module.exports = PaybillAccountTransactionRequest;
