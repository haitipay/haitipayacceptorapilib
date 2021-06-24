/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of AccountingEntry
 */
class AccountingEntry extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.date = this.constructor.getValue(obj.date);
        this.accountId = this.constructor.getValue(obj.accountId);
        this.description = this.constructor.getValue(obj.description);
        this.amount = this.constructor.getValue(obj.amount);
        this.balance = this.constructor.getValue(obj.balance);
        this.type = this.constructor.getValue(obj.type);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'date', realName: 'date', isDateTime: true, dateTimeValue: 'rfc3339' },
            { name: 'accountId', realName: 'accountId' },
            { name: 'description', realName: 'description' },
            { name: 'amount', realName: 'amount', type: 'Amount' },
            { name: 'balance', realName: 'balance', type: 'Amount' },
            { name: 'type', realName: 'type' },
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

module.exports = AccountingEntry;
