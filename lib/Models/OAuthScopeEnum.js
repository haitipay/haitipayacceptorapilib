/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const OAuthScopeEnum = {

    /**
     * View clients information
     */
    CLIENTS_VIEW: 'clients_view',

    /**
     * View acceptor accounts information
     */
    ACCOUNTS_VIEW: 'accounts_view',

    /**
     * View client accounts information
     */
    CLIENT_ACCOUNTS_VIEW: 'client_accounts_view',

    /**
     * Make cashin transaction
     */
    CASHIN: 'cashin',

    /**
     * Make cashout transaction
     */
    CASHOUT: 'cashout',

    /**
     * Make bill payment transaction
     */
    BILL_PAYMENT: 'bill_payment',

    /**
     * Make payment transaction
     */
    PAYMENT: 'payment',

    /**
     * Make reversal transaction
     */
    REVERSAL: 'reversal',

    /**
     * Authenticate acceptor with it's pincode
     */
    AUTHENTICATION_PINCODE_ACCEPTOR: 'authentication_pincode_acceptor',

    /**
     * Authenticate client with it's pincode
     */
    AUTHENTICATION_PINCODE_CLIENT: 'authentication_pincode_client',

    /**
     * Authenticate client with it's pincode through IVR
     */
    AUTHENTICATION_PINCODE_CLIENT_IVR: 'authentication_pincode_client_ivr',

    /**
     * Authenticate client with a one time password
     */
    AUTHENTICATION_OTP_CLIENT: 'authentication_otp_client',

    /**
     * Authenticate client with NSDT
     */
    AUTHENTICATION_NSDT: 'authentication_nsdt',

    /**
     * Authenticate client with QR Code
     */
    AUTHENTICATION_QR_CODE: 'authentication_qr_code',

    /**
     * Cancel an ongoing transaction
     */
    AUTHENTICATION_CANCEL: 'authentication_cancel',

    /**
     * Generate a transaction code
     */
    AUTHENTICATION_TRANSACTION_CODE: 'authentication_transaction_code',

};

module.exports = OAuthScopeEnum;
