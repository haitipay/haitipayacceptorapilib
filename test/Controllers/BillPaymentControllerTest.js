/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.BillPaymentController;
const TransactionsPaybillResponse = testerlib.TransactionsPaybillResponse;
const TransactionsPaybillResponse1 = testerlib.TransactionsPaybillResponse1;
const TransactionsPaybillRequest = testerlib.TransactionsPaybillRequest;
const TransactionsPaybillResponse2 = testerlib.TransactionsPaybillResponse2;

describe("BillPaymentController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Bill issuers list
     */
    it("should testTestLoadBillerTree response", function testTestLoadBillerTreeTest(done) {
        // parameters for the API call
        let billItemId = null;

        controller.loadBillerTree(billItemId, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            done();
        }).catch(() => undefined);
    });

});
