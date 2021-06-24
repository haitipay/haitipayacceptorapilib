/**
  * @module HaitiPayAcceptorAPILib
  *
  * # HaitiPay API description  **The HaitiPay platform** is designed to support several types of
  * transactions and payment applications. HaitiPay allows any phone to be used as for electronic
  * transactions, such as bill payment, money transfers to others, point of sale purchases, etc.
  * The HaitiPay platform offers the following features to users: purchase goods and services at
  * their favorite local stores. Unbanked merchants will be able to accept payments and formalize
  * their business transactions.    **HaitiPay electronic wallet:** Anyone with a mobile phone can
  * easily and securely: store, send and spend money using the HaitiPay electronic wallet. The
  * funds are placed in the wallet in different ways, by recharging in cash of the counter at agent
  * locations, by wallet to wallet transfers, by disbursement of wages or by linking it to a bank
  * account. The HaitiPay wallet can be used to pay bills, shop in stores on the web, or transfer
  * money to other users.  > 💡 Follow instructions below to request access to this workspace and
  * test the HaitiPay API.  ---  ## Request an invitation to Access the HaitiPay API     Please
  * request an invitation to access the HaitiPay API  by sending an email to [admin@haitipay.
  * com](mailto:admin@haitipay.com)  With your name and company information.    Within 24 hrs you
  * will receive a confirmation that will allow you to access the   HaitiPay workspace.     ##
  * We're Here to Help  It is important we understand the Business Models you want to implement.
  * Get in touch and let us know how we can help.  Contact support at [devsupport@haitipay.
  * com](mailto:devsupport@haitipay.com) to get help from our team.  # Authentication  ## OAuth2
  * ### Pre-requisites To access the HaitiPay Acceptor API you must have a registered acceptor
  * account on the HaitiPay platform. An API key for this acceptor must be created for you by
  * HaitiPay Administration.  ### Obtaining an Access Token In order to obtain an Access Token, you
  * must `POST`to the URL https://sandbox.haitipay.com/api/acceptor/v1/oauth2/ token using a
  * `Content-type: application/json` header and a JSON body containing the following items:  |
  * |                         |                        | |----------------|---------------
  * ----------------|-----------------------------| |grant_type|string|MUST be `client_credentials`
  * | |client_id         |string            |the `API key identifier`            |
  * |client_secret        |string|The `API key secret`|  **Request body example**  ```json {
  * "grant_type":"client_credentials",  "client_id":"eza9eza21eaz951ea8f2ffs9fgdfsdd3",
  * "client_secret":"eb5d1477-0dab-4b36-bc3e-9da6d6cc25ba" } ```  Calling the URL as described
  * above will yield a response similar to this (actual token cut off with `[...]` for brevity):
  * ```json { "token_type": "Bearer", "expires_in":59940, "access_token":
  * "eyJ0eXAiOiJKV1Qi0MzI5Oi0MzI5ODDNiMzJj[...]" } ```  ### Now that you have an Access Token The
  * thus obtained access token must be provided in the HTTP request header `Authorization` for each
  * **API call** prefixed by the word `Bearer` (with the trailing space):  `Authorization: Bearer
  * your_api_token`  ### Access token lifetime The access token has the **same lifetime as a user's
  * session**, with the significant difference that it's lifetime is not extended upon each API
  * action.  Therefore, the access token will expire after it's predefined lifetime has expired,
  * resulting in a HTTP 401 Unauthorized response with the message Access token is invalid.  It is
  * the API consumer's responsibility to detect such response, to obtain a new access token using
  * the process described above, and optionally to issue the failed request anew.
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const ClientsController = require('./Controllers/ClientsController');
const AccountsController = require('./Controllers/AccountsController');
const CashinController = require('./Controllers/CashinController');
const CashoutController = require('./Controllers/CashoutController');
const PaymentController = require('./Controllers/PaymentController');
const BillPaymentController = require('./Controllers/BillPaymentController');
const ReversalController = require('./Controllers/ReversalController');
const AuthenticationController = require('./Controllers/AuthenticationController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const Client = require('./Models/Client');
const AccountStatusEnum = require('./Models/AccountStatusEnum');
const AccountCollection = require('./Models/AccountCollection');
const ClientIdentifier = require('./Models/ClientIdentifier');
const Amount = require('./Models/Amount');
const TransactionRequest = require('./Models/TransactionRequest');
const TransactionSession = require('./Models/TransactionSession');
const TransactionAccounting = require('./Models/TransactionAccounting');
const CallStatusEvent = require('./Models/CallStatusEvent');
const TransactionSessionEvent = require('./Models/TransactionSessionEvent');
const NSDTTokenEvent = require('./Models/NSDTTokenEvent');
const ClientConnectedEvent = require('./Models/ClientConnectedEvent');
const TransactionPreauthEvent = require('./Models/TransactionPreauthEvent');
const MError = require('./Models/MError');
const Collection = require('./Models/Collection');
const Account = require('./Models/Account');
const IdIdentifier = require('./Models/IdIdentifier');
const PhoneIdentifier = require('./Models/PhoneIdentifier');
const IdNumberIdentifier = require('./Models/IdNumberIdentifier');
const ExternalIdIdentifier = require('./Models/ExternalIdIdentifier');
const Geolocation = require('./Models/Geolocation');
const BillerCategory = require('./Models/BillerCategory');
const Biller = require('./Models/Biller');
const PaybillAccountTransactionRequest = require('./Models/PaybillAccountTransactionRequest');
const PaybillCashTransactionRequest = require('./Models/PaybillCashTransactionRequest');
const TextInput = require('./Models/TextInput');
const AmountInput = require('./Models/AmountInput');
const BoolInput = require('./Models/BoolInput');
const DateInput = require('./Models/DateInput');
const DateTimeInput = require('./Models/DateTimeInput');
const DurationInput = require('./Models/DurationInput');
const EmailInput = require('./Models/EmailInput');
const FileInput = require('./Models/FileInput');
const InputCollection = require('./Models/InputCollection');
const IntInput = require('./Models/IntInput');
const IpInput = require('./Models/IpInput');
const SelectInput = require('./Models/SelectInput');
const MultiSelectInput = require('./Models/MultiSelectInput');
const NumberInput = require('./Models/NumberInput');
const PhoneInput = require('./Models/PhoneInput');
const RateInput = require('./Models/RateInput');
const SelectWithAmountInput = require('./Models/SelectWithAmountInput');
const TransactionSessionStatusEnum = require('./Models/TransactionSessionStatusEnum');
const Authentication = require('./Models/Authentication');
const Transaction = require('./Models/Transaction');
const AccountingEntry = require('./Models/AccountingEntry');
const ServerSentEvent = require('./Models/ServerSentEvent');
const CallStatusEnum = require('./Models/CallStatusEnum');
const AccountTypeEnum = require('./Models/AccountTypeEnum');
const BillerItemTypeEnum = require('./Models/BillerItemTypeEnum');
const PaybillTypeEnum = require('./Models/PaybillTypeEnum');
const AbstractInput = require('./Models/AbstractInput');
const Duration = require('./Models/Duration');
const PeriodicityEnum = require('./Models/PeriodicityEnum');
const Option = require('./Models/Option');
const OptionWithAmount = require('./Models/OptionWithAmount');
const AuthenticationModeEnum = require('./Models/AuthenticationModeEnum');
const AuthenticationStatusEnum = require('./Models/AuthenticationStatusEnum');
const TransactionTypeEnum = require('./Models/TransactionTypeEnum');
const AccountingEntryTypeEnum = require('./Models/AccountingEntryTypeEnum');
const InputTypeEnum = require('./Models/InputTypeEnum');
const AmountValidator = require('./Models/AmountValidator');
const MinValidator = require('./Models/MinValidator');
const MaxValidator = require('./Models/MaxValidator');
const BetweenValidator = require('./Models/BetweenValidator');
const BlacklistValidator = require('./Models/BlacklistValidator');
const WhitelistValidator = require('./Models/WhitelistValidator');
const LengthValidator = require('./Models/LengthValidator');
const MaxLengthValidator = require('./Models/MaxLengthValidator');
const MinLengthValidator = require('./Models/MinLengthValidator');
const PasswordValidator = require('./Models/PasswordValidator');
const RegexValidator = require('./Models/RegexValidator');
const ValidatorTypeEnum = require('./Models/ValidatorTypeEnum');
const AuthenticationsOtpClientVerifyRequest =
  require('./Models/AuthenticationsOtpClientVerifyRequest');
const AuthenticationsOtpClientVerifyResponse =
  require('./Models/AuthenticationsOtpClientVerifyResponse');
const AuthenticationsPincodeAcceptorVerifyRequest =
  require('./Models/AuthenticationsPincodeAcceptorVerifyRequest');
const AuthenticationsPincodeAcceptorVerifyResponse =
  require('./Models/AuthenticationsPincodeAcceptorVerifyResponse');
const AuthenticationsPincodeClientVerifyRequest =
  require('./Models/AuthenticationsPincodeClientVerifyRequest');
const AuthenticationsPincodeClientVerifyResponse =
  require('./Models/AuthenticationsPincodeClientVerifyResponse');
const Data = require('./Models/Data');
const Data1 = require('./Models/Data1');
const Data2 = require('./Models/Data2');
const Data3 = require('./Models/Data3');
const Data4 = require('./Models/Data4');
const EventEnum = require('./Models/EventEnum');
const Inputs = require('./Models/Inputs');
const TransactionsCashinRequest = require('./Models/TransactionsCashinRequest');
const TransactionsCashinResponse = require('./Models/TransactionsCashinResponse');
const TransactionsCashinResponse1 = require('./Models/TransactionsCashinResponse1');
const TransactionsCashoutRequest = require('./Models/TransactionsCashoutRequest');
const TransactionsCashoutResponse = require('./Models/TransactionsCashoutResponse');
const TransactionsCashoutResponse1 = require('./Models/TransactionsCashoutResponse1');
const TransactionsPaybillRequest = require('./Models/TransactionsPaybillRequest');
const TransactionsPaybillResponse = require('./Models/TransactionsPaybillResponse');
const TransactionsPaybillResponse1 = require('./Models/TransactionsPaybillResponse1');
const TransactionsPaybillResponse2 = require('./Models/TransactionsPaybillResponse2');
const TransactionsPaymentRequest = require('./Models/TransactionsPaymentRequest');
const TransactionsPaymentResponse = require('./Models/TransactionsPaymentResponse');
const TransactionsPaymentResponse1 = require('./Models/TransactionsPaymentResponse1');
const TransactionsReversalRequest = require('./Models/TransactionsReversalRequest');
const TransactionsReversalResponse = require('./Models/TransactionsReversalResponse');
const TransactionsReversalResponse1 = require('./Models/TransactionsReversalResponse1');
const Type = require('./Models/Type');
const Type1Enum = require('./Models/Type1Enum');
const Type2Enum = require('./Models/Type2Enum');
const Type3Enum = require('./Models/Type3Enum');
const Type4Enum = require('./Models/Type4Enum');
const Value = require('./Models/Value');
const OAuthScopeEnum = require('./Models/OAuthScopeEnum');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const Accounts0ErrorException = require('./Exceptions/Accounts0ErrorException');
const Authentications0ErrorException = require('./Exceptions/Authentications0ErrorException');
const AuthenticationsNsdtVerify0ErrorException =
  require('./Exceptions/AuthenticationsNsdtVerify0ErrorException');
const AuthenticationsOtpClientSend0ErrorException =
  require('./Exceptions/AuthenticationsOtpClientSend0ErrorException');
const AuthenticationsOtpClientVerify0ErrorException =
  require('./Exceptions/AuthenticationsOtpClientVerify0ErrorException');
const AuthenticationsPincodeAcceptorVerify0ErrorException =
  require('./Exceptions/AuthenticationsPincodeAcceptorVerify0ErrorException');
const AuthenticationsPincodeClientIvrVerify0ErrorException =
  require('./Exceptions/AuthenticationsPincodeClientIvrVerify0ErrorException');
const AuthenticationsPincodeClientVerify0ErrorException =
  require('./Exceptions/AuthenticationsPincodeClientVerify0ErrorException');
const AuthenticationsQrCodeVerify0ErrorException =
  require('./Exceptions/AuthenticationsQrCodeVerify0ErrorException');
const Billers0ErrorException = require('./Exceptions/Billers0ErrorException');
const Clients0ErrorException = require('./Exceptions/Clients0ErrorException');
const ClientsAccounts0ErrorException = require('./Exceptions/ClientsAccounts0ErrorException');
const TransactionsCashin0ErrorException = require('./Exceptions/TransactionsCashin0ErrorException');
const TransactionsCashout0ErrorException =
  require('./Exceptions/TransactionsCashout0ErrorException');
const TransactionsPaybill0ErrorException =
  require('./Exceptions/TransactionsPaybill0ErrorException');
const TransactionsPayment0ErrorException =
  require('./Exceptions/TransactionsPayment0ErrorException');
const TransactionsReversal0ErrorException =
  require('./Exceptions/TransactionsReversal0ErrorException');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of HaitiPayAcceptorAPILib
    Configuration,
    OAuthManager,
    // controllers of HaitiPayAcceptorAPILib
    ClientsController,
    AccountsController,
    CashinController,
    CashoutController,
    PaymentController,
    BillPaymentController,
    ReversalController,
    AuthenticationController,
    OAuthAuthorizationController,
    // models of HaitiPayAcceptorAPILib
    Client,
    AccountStatusEnum,
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
    TransactionSessionStatusEnum,
    Authentication,
    Transaction,
    AccountingEntry,
    ServerSentEvent,
    CallStatusEnum,
    AccountTypeEnum,
    BillerItemTypeEnum,
    PaybillTypeEnum,
    AbstractInput,
    Duration,
    PeriodicityEnum,
    Option,
    OptionWithAmount,
    AuthenticationModeEnum,
    AuthenticationStatusEnum,
    TransactionTypeEnum,
    AccountingEntryTypeEnum,
    InputTypeEnum,
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
    ValidatorTypeEnum,
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
    EventEnum,
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
    Type1Enum,
    Type2Enum,
    Type3Enum,
    Type4Enum,
    Value,
    OAuthScopeEnum,
    OAuthToken,
    OAuthProviderErrorEnum,
    // exceptions of HaitiPayAcceptorAPILib
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
    APIException,
};

module.exports = initializer;
