/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of PasswordValidator
 */
class PasswordValidator extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.type = this.constructor.getValue(obj.type);
        this.minLength = this.constructor.getValue(obj.minLength);
        this.regexp = this.constructor.getValue(obj.regexp);
        this.forbidRegex = this.constructor.getValue(obj.forbidRegex);
        this.forbidDates = this.constructor.getValue(obj.forbidDates);
        this.blacklist = this.constructor.getValue(obj.blacklist);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'type', realName: 'type' },
            { name: 'minLength', realName: 'minLength' },
            { name: 'regexp', realName: 'regexp' },
            { name: 'forbidRegex', realName: 'forbidRegex' },
            { name: 'forbidDates', realName: 'forbidDates' },
            { name: 'blacklist', realName: 'blacklist', array: true },
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

module.exports = PasswordValidator;
