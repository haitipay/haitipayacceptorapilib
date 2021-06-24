/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MultiSelectInput
 */
class MultiSelectInput extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.type = this.constructor.getValue(obj.type);
        this.label = this.constructor.getValue(obj.label);
        this.description = this.constructor.getValue(obj.description);
        this.required = this.constructor.getValue(obj.required);
        this.validators = this.constructor.getValue(obj.validators);
        this.disabled = this.constructor.getValue(obj.disabled, false);
        this.value = this.constructor.getValue(obj.value);
        this.values = this.constructor.getValue(obj.values);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'type', realName: 'type' },
            { name: 'label', realName: 'label' },
            { name: 'description', realName: 'description' },
            { name: 'required', realName: 'required' },
            { name: 'validators', realName: 'validators', array: true },
            { name: 'disabled', realName: 'disabled' },
            { name: 'value', realName: 'value', array: true },
            { name: 'values', realName: 'values', array: true, type: 'Option' },
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

module.exports = MultiSelectInput;
