/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Collection
 */
class Collection extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.items = this.constructor.getValue(obj.items);
        this.count = this.constructor.getValue(obj.count);
        this.total = this.constructor.getValue(obj.total);
        this.offset = this.constructor.getValue(obj.offset, 0);
        this.limit = this.constructor.getValue(obj.limit, 20);
        this.sort = this.constructor.getValue(obj.sort, 'id');
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'items', realName: 'items', array: true },
            { name: 'count', realName: 'count' },
            { name: 'total', realName: 'total' },
            { name: 'offset', realName: 'offset' },
            { name: 'limit', realName: 'limit' },
            { name: 'sort', realName: 'sort' },
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

module.exports = Collection;
