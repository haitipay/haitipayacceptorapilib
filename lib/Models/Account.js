/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Account
 */
class Account extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.balance = this.constructor.getValue(obj.balance);
        this.availableBalance = this.constructor.getValue(obj.availableBalance);
        this.status = this.constructor.getValue(obj.status);
        this.label = this.constructor.getValue(obj.label);
        this.createdAt = this.constructor.getValue(obj.createdAt);
        this.externalId = this.constructor.getValue(obj.externalId);
        this.iban = this.constructor.getValue(obj.iban);
        this.bic = this.constructor.getValue(obj.bic);
        this.lastUsedAt = this.constructor.getValue(obj.lastUsedAt);
        this.deletedAt = this.constructor.getValue(obj.deletedAt);
        this.type = this.constructor.getValue(obj.type);
        this.merchant = this.constructor.getValue(obj.merchant);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'balance', realName: 'balance', type: 'Amount' },
            { name: 'availableBalance', realName: 'availableBalance', type: 'Amount' },
            { name: 'status', realName: 'status' },
            { name: 'label', realName: 'label' },
            {
                name: 'createdAt',
                realName: 'createdAt',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'externalId', realName: 'externalId' },
            { name: 'iban', realName: 'iban' },
            { name: 'bic', realName: 'bic' },
            {
                name: 'lastUsedAt',
                realName: 'lastUsedAt',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            {
                name: 'deletedAt',
                realName: 'deletedAt',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'type', realName: 'type' },
            { name: 'merchant', realName: 'merchant' },
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

module.exports = Account;
