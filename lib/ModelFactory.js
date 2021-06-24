/**
 * HaitiPayAcceptorAPILib
 *
 * This file was automatically generated for HaitiPay by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const Client = require('../lib/Models/Client');
const AccountCollection = require('../lib/Models/AccountCollection');
const ClientIdentifier = require('../lib/Models/ClientIdentifier');
const Amount = require('../lib/Models/Amount');
const TransactionRequest = require('../lib/Models/TransactionRequest');
const TransactionSession = require('../lib/Models/TransactionSession');
const TransactionAccounting = require('../lib/Models/TransactionAccounting');
const CallStatusEvent = require('../lib/Models/CallStatusEvent');
const TransactionSessionEvent = require('../lib/Models/TransactionSessionEvent');
const NSDTTokenEvent = require('../lib/Models/NSDTTokenEvent');
const ClientConnectedEvent = require('../lib/Models/ClientConnectedEvent');
const TransactionPreauthEvent = require('../lib/Models/TransactionPreauthEvent');
const MError = require('../lib/Models/MError');
const Collection = require('../lib/Models/Collection');
const Account = require('../lib/Models/Account');
const IdIdentifier = require('../lib/Models/IdIdentifier');
const PhoneIdentifier = require('../lib/Models/PhoneIdentifier');
const IdNumberIdentifier = require('../lib/Models/IdNumberIdentifier');
const ExternalIdIdentifier = require('../lib/Models/ExternalIdIdentifier');
const Geolocation = require('../lib/Models/Geolocation');
const BillerCategory = require('../lib/Models/BillerCategory');
const Biller = require('../lib/Models/Biller');
const PaybillAccountTransactionRequest = require('../lib/Models/PaybillAccountTransactionRequest');
const PaybillCashTransactionRequest = require('../lib/Models/PaybillCashTransactionRequest');
const TextInput = require('../lib/Models/TextInput');
const AmountInput = require('../lib/Models/AmountInput');
const BoolInput = require('../lib/Models/BoolInput');
const DateInput = require('../lib/Models/DateInput');
const DateTimeInput = require('../lib/Models/DateTimeInput');
const DurationInput = require('../lib/Models/DurationInput');
const EmailInput = require('../lib/Models/EmailInput');
const FileInput = require('../lib/Models/FileInput');
const InputCollection = require('../lib/Models/InputCollection');
const IntInput = require('../lib/Models/IntInput');
const IpInput = require('../lib/Models/IpInput');
const SelectInput = require('../lib/Models/SelectInput');
const MultiSelectInput = require('../lib/Models/MultiSelectInput');
const NumberInput = require('../lib/Models/NumberInput');
const PhoneInput = require('../lib/Models/PhoneInput');
const RateInput = require('../lib/Models/RateInput');
const SelectWithAmountInput = require('../lib/Models/SelectWithAmountInput');
const Authentication = require('../lib/Models/Authentication');
const Transaction = require('../lib/Models/Transaction');
const AccountingEntry = require('../lib/Models/AccountingEntry');
const ServerSentEvent = require('../lib/Models/ServerSentEvent');
const AbstractInput = require('../lib/Models/AbstractInput');
const Duration = require('../lib/Models/Duration');
const Option = require('../lib/Models/Option');
const OptionWithAmount = require('../lib/Models/OptionWithAmount');
const AmountValidator = require('../lib/Models/AmountValidator');
const MinValidator = require('../lib/Models/MinValidator');
const MaxValidator = require('../lib/Models/MaxValidator');
const BetweenValidator = require('../lib/Models/BetweenValidator');
const BlacklistValidator = require('../lib/Models/BlacklistValidator');
const WhitelistValidator = require('../lib/Models/WhitelistValidator');
const LengthValidator = require('../lib/Models/LengthValidator');
const MaxLengthValidator = require('../lib/Models/MaxLengthValidator');
const MinLengthValidator = require('../lib/Models/MinLengthValidator');
const PasswordValidator = require('../lib/Models/PasswordValidator');
const RegexValidator = require('../lib/Models/RegexValidator');
const AuthenticationsOtpClientVerifyRequest =
  require('../lib/Models/AuthenticationsOtpClientVerifyRequest');
const AuthenticationsOtpClientVerifyResponse =
  require('../lib/Models/AuthenticationsOtpClientVerifyResponse');
const AuthenticationsPincodeAcceptorVerifyRequest =
  require('../lib/Models/AuthenticationsPincodeAcceptorVerifyRequest');
const AuthenticationsPincodeAcceptorVerifyResponse =
  require('../lib/Models/AuthenticationsPincodeAcceptorVerifyResponse');
const AuthenticationsPincodeClientVerifyRequest =
  require('../lib/Models/AuthenticationsPincodeClientVerifyRequest');
const AuthenticationsPincodeClientVerifyResponse =
  require('../lib/Models/AuthenticationsPincodeClientVerifyResponse');
const Data = require('../lib/Models/Data');
const Data1 = require('../lib/Models/Data1');
const Data2 = require('../lib/Models/Data2');
const Data3 = require('../lib/Models/Data3');
const Data4 = require('../lib/Models/Data4');
const Inputs = require('../lib/Models/Inputs');
const TransactionsCashinRequest = require('../lib/Models/TransactionsCashinRequest');
const TransactionsCashinResponse = require('../lib/Models/TransactionsCashinResponse');
const TransactionsCashinResponse1 = require('../lib/Models/TransactionsCashinResponse1');
const TransactionsCashoutRequest = require('../lib/Models/TransactionsCashoutRequest');
const TransactionsCashoutResponse = require('../lib/Models/TransactionsCashoutResponse');
const TransactionsCashoutResponse1 = require('../lib/Models/TransactionsCashoutResponse1');
const TransactionsPaybillRequest = require('../lib/Models/TransactionsPaybillRequest');
const TransactionsPaybillResponse = require('../lib/Models/TransactionsPaybillResponse');
const TransactionsPaybillResponse1 = require('../lib/Models/TransactionsPaybillResponse1');
const TransactionsPaybillResponse2 = require('../lib/Models/TransactionsPaybillResponse2');
const TransactionsPaymentRequest = require('../lib/Models/TransactionsPaymentRequest');
const TransactionsPaymentResponse = require('../lib/Models/TransactionsPaymentResponse');
const TransactionsPaymentResponse1 = require('../lib/Models/TransactionsPaymentResponse1');
const TransactionsReversalRequest = require('../lib/Models/TransactionsReversalRequest');
const TransactionsReversalResponse = require('../lib/Models/TransactionsReversalResponse');
const TransactionsReversalResponse1 = require('../lib/Models/TransactionsReversalResponse1');
const Type = require('../lib/Models/Type');
const Value = require('../lib/Models/Value');
const OAuthToken = require('../lib/Models/OAuthToken');
const Accounts0ErrorException = require('../lib/Exceptions/Accounts0ErrorException');
const Authentications0ErrorException = require('../lib/Exceptions/Authentications0ErrorException');
const AuthenticationsNsdtVerify0ErrorException =
  require('../lib/Exceptions/AuthenticationsNsdtVerify0ErrorException');
const AuthenticationsOtpClientSend0ErrorException =
  require('../lib/Exceptions/AuthenticationsOtpClientSend0ErrorException');
const AuthenticationsOtpClientVerify0ErrorException =
  require('../lib/Exceptions/AuthenticationsOtpClientVerify0ErrorException');
const AuthenticationsPincodeAcceptorVerify0ErrorException =
  require('../lib/Exceptions/AuthenticationsPincodeAcceptorVerify0ErrorException');
const AuthenticationsPincodeClientIvrVerify0ErrorException =
  require('../lib/Exceptions/AuthenticationsPincodeClientIvrVerify0ErrorException');
const AuthenticationsPincodeClientVerify0ErrorException =
  require('../lib/Exceptions/AuthenticationsPincodeClientVerify0ErrorException');
const AuthenticationsQrCodeVerify0ErrorException =
  require('../lib/Exceptions/AuthenticationsQrCodeVerify0ErrorException');
const Billers0ErrorException = require('../lib/Exceptions/Billers0ErrorException');
const Clients0ErrorException = require('../lib/Exceptions/Clients0ErrorException');
const ClientsAccounts0ErrorException = require('../lib/Exceptions/ClientsAccounts0ErrorException');
const TransactionsCashin0ErrorException =
  require('../lib/Exceptions/TransactionsCashin0ErrorException');
const TransactionsCashout0ErrorException =
  require('../lib/Exceptions/TransactionsCashout0ErrorException');
const TransactionsPaybill0ErrorException =
  require('../lib/Exceptions/TransactionsPaybill0ErrorException');
const TransactionsPayment0ErrorException =
  require('../lib/Exceptions/TransactionsPayment0ErrorException');
const TransactionsReversal0ErrorException =
  require('../lib/Exceptions/TransactionsReversal0ErrorException');
const OAuthProviderException = require('../lib/Exceptions/OAuthProviderException');

const classMap = {
    Client,
    AccountCollection,
    ClientIdentifier,
    Amount,
    TransactionRequest,
    TransactionSession,
    TransactionAccounting,
    CallStatusEvent,
    TransactionSessionEvent,
    NSDTTokenEvent,
    ClientConnectedEvent,
    TransactionPreauthEvent,
    MError,
    Collection,
    Account,
    IdIdentifier,
    PhoneIdentifier,
    IdNumberIdentifier,
    ExternalIdIdentifier,
    Geolocation,
    BillerCategory,
    Biller,
    PaybillAccountTransactionRequest,
    PaybillCashTransactionRequest,
    TextInput,
    AmountInput,
    BoolInput,
    DateInput,
    DateTimeInput,
    DurationInput,
    EmailInput,
    FileInput,
    InputCollection,
    IntInput,
    IpInput,
    SelectInput,
    MultiSelectInput,
    NumberInput,
    PhoneInput,
    RateInput,
    SelectWithAmountInput,
    Authentication,
    Transaction,
    AccountingEntry,
    ServerSentEvent,
    AbstractInput,
    Duration,
    Option,
    OptionWithAmount,
    AmountValidator,
    MinValidator,
    MaxValidator,
    BetweenValidator,
    BlacklistValidator,
    WhitelistValidator,
    LengthValidator,
    MaxLengthValidator,
    MinLengthValidator,
    PasswordValidator,
    RegexValidator,
    AuthenticationsOtpClientVerifyRequest,
    AuthenticationsOtpClientVerifyResponse,
    AuthenticationsPincodeAcceptorVerifyRequest,
    AuthenticationsPincodeAcceptorVerifyResponse,
    AuthenticationsPincodeClientVerifyRequest,
    AuthenticationsPincodeClientVerifyResponse,
    Data,
    Data1,
    Data2,
    Data3,
    Data4,
    Inputs,
    TransactionsCashinRequest,
    TransactionsCashinResponse,
    TransactionsCashinResponse1,
    TransactionsCashoutRequest,
    TransactionsCashoutResponse,
    TransactionsCashoutResponse1,
    TransactionsPaybillRequest,
    TransactionsPaybillResponse,
    TransactionsPaybillResponse1,
    TransactionsPaybillResponse2,
    TransactionsPaymentRequest,
    TransactionsPaymentResponse,
    TransactionsPaymentResponse1,
    TransactionsReversalRequest,
    TransactionsReversalResponse,
    TransactionsReversalResponse1,
    Type,
    Value,
    OAuthToken,
    Accounts0ErrorException,
    Authentications0ErrorException,
    AuthenticationsNsdtVerify0ErrorException,
    AuthenticationsOtpClientSend0ErrorException,
    AuthenticationsOtpClientVerify0ErrorException,
    AuthenticationsPincodeAcceptorVerify0ErrorException,
    AuthenticationsPincodeClientIvrVerify0ErrorException,
    AuthenticationsPincodeClientVerify0ErrorException,
    AuthenticationsQrCodeVerify0ErrorException,
    Billers0ErrorException,
    Clients0ErrorException,
    ClientsAccounts0ErrorException,
    TransactionsCashin0ErrorException,
    TransactionsCashout0ErrorException,
    TransactionsPaybill0ErrorException,
    TransactionsPayment0ErrorException,
    TransactionsReversal0ErrorException,
    OAuthProviderException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
