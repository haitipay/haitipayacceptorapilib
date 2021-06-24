/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of TransactionAccounting
 */
class TransactionAccounting extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.date = this.constructor.getValue(obj.date);
        this.type = this.constructor.getValue(obj.type);
        this.externalId = this.constructor.getValue(obj.externalId);
        this.externalData = this.constructor.getValue(obj.externalData);
        this.label = this.constructor.getValue(obj.label);
        this.description = this.constructor.getValue(obj.description);
        this.geolocation = this.constructor.getValue(obj.geolocation);
        this.amount = this.constructor.getValue(obj.amount);
        this.detailedAccounting = this.constructor.getValue(obj.detailedAccounting);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'date', realName: 'date', isDateTime: true, dateTimeValue: 'rfc3339' },
            { name: 'type', realName: 'type', type: 'Type' },
            { name: 'externalId', realName: 'externalId' },
            { name: 'externalData', realName: 'externalData' },
            { name: 'label', realName: 'label' },
            { name: 'description', realName: 'description' },
            { name: 'geolocation', realName: 'geolocation', type: 'Geolocation' },
            { name: 'amount', realName: 'amount', type: 'Amount' },
            {
                name: 'detailedAccounting',
                realName: 'detailedAccounting',
                array: true,
                type: 'AccountingEntry',
            },
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

module.exports = TransactionAccounting;
