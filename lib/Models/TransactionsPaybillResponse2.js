/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of TransactionsPaybillResponse2
 */
class TransactionsPaybillResponse2 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.transaction = this.constructor.getValue(obj.transaction);
        this.info = this.constructor.getValue(obj.info);
        this.additional = this.constructor.getValue(obj.additional);
        this.voucher = this.constructor.getValue(obj.voucher);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'transaction', realName: 'transaction', type: 'TransactionAccounting' },
            { name: 'info', realName: 'info' },
            { name: 'additional', realName: 'additional' },
            { name: 'voucher', realName: 'voucher' },
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

module.exports = TransactionsPaybillResponse2;
