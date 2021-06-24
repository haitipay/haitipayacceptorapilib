# Getting started

# HaitiPay API description

**The HaitiPay platform** is designed to support several types of transactions and payment applications. HaitiPay allows any phone to be used as for electronic transactions, such as bill payment, money transfers to others, point of sale purchases, etc. The HaitiPay platform offers the following features to users:
purchase goods and services at their favorite local stores. Unbanked merchants will be able to accept payments and formalize their business transactions. 
 
**HaitiPay electronic wallet:** Anyone with a mobile phone can easily and securely: store, send and spend money using the HaitiPay electronic wallet. The funds are placed in the wallet in different ways, by recharging in cash of the counter at agent locations, by wallet to wallet transfers, by disbursement of wages or by linking it to a bank account. The HaitiPay wallet can be used to pay bills, shop in stores on the web, or transfer money to other users.

> 💡 Follow instructions below to request access to this workspace and test the HaitiPay API.

---

## Request an invitation to Access the HaitiPay API 
 
 Please request an invitation to access the HaitiPay API
 by sending an email to [admin@haitipay.com](mailto:admin@haitipay.com)
 With your name and company information.
 
 Within 24 hrs you will receive a confirmation that will allow you to access the 
 HaitiPay workspace.
  

## We're Here to Help

It is important we understand the Business Models you want to implement.
Get in touch and let us know how we can help.

Contact support at [devsupport@haitipay.com](mailto:devsupport@haitipay.com)
to get help from our team.

# Authentication

## OAuth2
### Pre-requisites
To access the HaitiPay Acceptor API you must have a registered acceptor account on the HaitiPay platform. An API key for this acceptor must be created for you by HaitiPay Administration.

### Obtaining an Access Token
In order to obtain an Access Token, you must `POST`to the URL https://sandbox.haitipay.com/api/acceptor/v1/oauth2/ token using a `Content-type: application/json` header and a JSON body containing the following items:

|                |                         |                        |
|----------------|-------------------------------|-----------------------------|
|grant_type|string|MUST be `client_credentials`          |
|client_id         |string            |the `API key identifier`            |
|client_secret        |string|The `API key secret`|

**Request body example**

```json
{ 
"grant_type":"client_credentials", 
"client_id":"eza9eza21eaz951ea8f2ffs9fgdfsdd3", 
"client_secret":"eb5d1477-0dab-4b36-bc3e-9da6d6cc25ba"
}
```

Calling the URL as described above will yield a response similar to this (actual token cut off with `[...]` for brevity):

```json
{
"token_type": "Bearer",
"expires_in":59940,
"access_token":"eyJ0eXAiOiJKV1Qi0MzI5Oi0MzI5ODDNiMzJj[...]"
}
```

### Now that you have an Access Token
The thus obtained access token must be provided in the HTTP request header `Authorization` for each **API call** prefixed by the word `Bearer` (with the trailing space):

`Authorization: Bearer your_api_token`

### Access token lifetime
The access token has the **same lifetime as a user's session**, with the significant difference that it's lifetime is not extended upon each API action.

Therefore, the access token will expire after it's predefined lifetime has expired, resulting in a HTTP 401 Unauthorized response with the message Access token is invalid.

It is the API consumer's responsibility to detect such response, to obtain a new access token using the process described above, and optionally to issue the failed request anew.

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=HaitiPay%20Acceptor%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=HaitiPay%20Acceptor%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `HaitiPayAcceptorAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=HaitiPay%20Acceptor%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=HaitiPay%20Acceptor%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=HaitiPay%20Acceptor%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=HaitiPay%20Acceptor%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  HaitiPay Acceptor APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=HaitiPay%20Acceptor%20APIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthClientSecret | OAuth 2 Client Secret |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.oAuthClientId = "oAuthClientId"; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = "oAuthClientSecret"; // OAuth 2 Client Secret

```

You must now authorize the client.

### Authorizing your client


This SDK uses *OAuth 2.0 authorization* to authorize the client.

The `authorize()` method will exchange the OAuth client credentials for an *access token*.
The access token is an object containing information for authorizing client requests.

 You must pass the *[scopes](#scopes)* for which you need permission to access.
```JavaScript
const tokenPromise = oAuthManager.authorize([lib.OAuthScopeEnum.CLIENTS_VIEW, lib.OAuthScopeEnum.ACCOUNTS_VIEW]);
```
The Node.js SDK supports both callbacks and promises. So, the authorize call returns a promise and also returns response back in the callback (if one is provided)

The client can now make authorized endpoint calls.



### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the `lib/Models/OAuthScopeEnum` enumeration.

| Scope Name | Description |
| --- | --- |
| `CLIENTS_VIEW` | View clients information |
| `ACCOUNTS_VIEW` | View acceptor accounts information |
| `CLIENT_ACCOUNTS_VIEW` | View client accounts information |
| `CASHIN` | Make cashin transaction |
| `CASHOUT` | Make cashout transaction |
| `BILL_PAYMENT` | Make bill payment transaction |
| `PAYMENT` | Make payment transaction |
| `REVERSAL` | Make reversal transaction |
| `AUTHENTICATION_PINCODE_ACCEPTOR` | Authenticate acceptor with it's pincode |
| `AUTHENTICATION_PINCODE_CLIENT` | Authenticate client with it's pincode |
| `AUTHENTICATION_PINCODE_CLIENT_IVR` | Authenticate client with it's pincode through IVR |
| `AUTHENTICATION_OTP_CLIENT` | Authenticate client with a one time password |
| `AUTHENTICATION_NSDT` | Authenticate client with NSDT |
| `AUTHENTICATION_QR_CODE` | Authenticate client with QR Code |
| `AUTHENTICATION_CANCEL` | Cancel an ongoing transaction |
| `AUTHENTICATION_TRANSACTION_CODE` | Generate a transaction code |


### Storing an access token for reuse

It is recommended that you store the access token for reuse.

This code snippet stores the access token in a data store. For this example, [node-localstorage](https://www.npmjs.com/package/node-localstorage) is being used as the data store.
```JavaScript
const lib = require('lib');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

localStorage.setItem('token', lib.Configuration.oAuthToken);
```

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in `Configuration` along with the other configuration parameters before making endpoint calls:

```JavaScript
// load token later...
const lib = require('lib');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

lib.Configuration.oAuthToken = localStorage.getItem('token');
```

### Complete example
In this example, `app.js` will check if the access token has been set in the SDK. If it has been, API calls can be made. Otherwise, client has to be authorized first before making API calls.  
This example makes use of [node-localstorage](https://www.npmjs.com/package/node-localstorage) for handling data persistence.

#### `app.js`

```js
const lib = require('lib');
const oAuthManager = lib.OAuthManager;

lib.Configuration.oAuthClientId = 'oAuthClientId'; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = 'oAuthClientSecret'; // OAuth 2 Client Secret

// this method will be called whenever the token updates
// you can update the storage you're using with the updated token
lib.Configuration.oAuthTokenUpdateCallback = (token) => {
    // token is the updated access_token
};

if (oAuthManager.isTokenSet()) {
    // token is already stored in the client
    // make API calls as required
} else {
    const scopes = [lib.OAuthScopeEnum.CLIENTS_VIEW, lib.OAuthScopeEnum.ACCOUNTS_VIEW];
    const promise = oAuthManager.authorize(scopes);
    promise.then((success) => {
        // client authorized. API calls can be made
    }, (exception) => {
        // error occurred, `exception` will be of type lib/Exceptions/OAuthProviderException
    });
}
```




# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [ClientsController](#clients_controller)
* [AccountsController](#accounts_controller)
* [CashinController](#cashin_controller)
* [CashoutController](#cashout_controller)
* [PaymentController](#payment_controller)
* [BillPaymentController](#bill_payment_controller)
* [ReversalController](#reversal_controller)
* [AuthenticationController](#authentication_controller)

## <a name="clients_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ClientsController") ClientsController

### Get singleton instance

The singleton instance of the ``` ClientsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ClientsController;
```

### <a name="search_clients"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.searchClients") searchClients

> Search for a client


```javascript
function searchClients(phone, idNumber, externalId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| phone |  ``` Optional ```  | the client mobile phone number format ex: 50937027447 |
| idNumber |  ``` Optional ```  | the client identity number National ID card ex: 123456789 |
| externalId |  ``` Optional ```  | the client l identifier from External  Third Party System ex: EXTSYSID123 |



#### Example Usage

```javascript

    var phone = '50937027447';
    var idNumber = '0038699008';
    var externalId = 'EXT123';

    controller.searchClients(phone, idNumber, externalId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




[Back to List of Controllers](#list_of_controllers)

## <a name="accounts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountsController") AccountsController

### Get singleton instance

The singleton instance of the ``` AccountsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AccountsController;
```

### <a name="search_accounts"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.searchAccounts") searchAccounts

> Search accounts


```javascript
function searchAccounts(id, iban, bic, status, type, offset, limit, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Optional ```  | insert HaitiPay Account Number format 11 digits = ex:   10000015205 |
| iban |  ``` Optional ```  | Account information in IBAN format:  FR791680810000000538 |
| bic |  ``` Optional ```  | Account information in BIC format 9 -11 Letters:  BNCHHTPPXXX |
| status |  ``` Optional ```  ``` Collection ```  | OPEN, BLOCKED, CLOSED, |
| type |  ``` Optional ```  | type of account =CURRENT, SAVINGS or DEDICATED |
| offset |  ``` Optional ```  ``` DefaultValue ```  | Pagination page number |
| limit |  ``` Optional ```  ``` DefaultValue ```  | The number of items per page |
| sort |  ``` Optional ```  ``` DefaultValue ```  | Field to define the sort order. To indicate sorting direction, ascending (oldest first) fields may be prefixed with +. Descending (newer first) fields may be prefixed with - |



#### Example Usage

```javascript

    var id = '1421';
    var iban = '';
    var bic = 'bic';
    var status = [ Object.keys(AccountStatus)[0] ];
    var type = 'type';
    var offset = 0;
    var limit = 20;
    var sort = 'id';

    controller.searchAccounts(id, iban, bic, status, type, offset, limit, sort, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="search_client_accounts"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.searchClientAccounts") searchClientAccounts

> Search client accounts


```javascript
function searchClientAccounts(clientId, id, iban, bic, status, type, offset, limit, sort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| clientId |  ``` Required ```  | insert client id ex: 1421 * (can be obtained by looking up client profile with Search Client EndPoint using Client Phone Number or Identification Number Gov. ID card, Passport, SSN) |
| id |  ``` Optional ```  | HaitiPay Account *11 Digits ex: 10000015205 |
| iban |  ``` Optional ```  | Account information in IBAN format: ex:  FR791680810000000538 |
| bic |  ``` Optional ```  | Account information in BIC format 9 -11 Letters:  BNCHHTPPXXX |
| status |  ``` Optional ```  ``` Collection ```  | Status of the Account  ex: OPENED , CLOSED, BLOCKED |
| type |  ``` Optional ```  | type of  HaitiPay Account ** Exemple: CURRENT, DEDICATED |
| offset |  ``` Optional ```  ``` DefaultValue ```  | Pagination page number |
| limit |  ``` Optional ```  ``` DefaultValue ```  | The number of items per page |
| sort |  ``` Optional ```  ``` DefaultValue ```  | Field to define the sort order. To indicate sorting direction, ascending (oldest first) fields may be prefixed with +. Descending (newer first) fields may be prefixed with - |



#### Example Usage

```javascript

    var clientId = '1421';
    var id = '';
    var iban = '';
    var bic = 'bic';
    var status = [ Object.keys(AccountStatus)[0] ];
    var type = 'type';
    var offset = 0;
    var limit = 20;
    var sort = 'id';

    controller.searchClientAccounts(clientId, id, iban, bic, status, type, offset, limit, sort, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




[Back to List of Controllers](#list_of_controllers)

## <a name="cashin_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CashinController") CashinController

### Get singleton instance

The singleton instance of the ``` CashinController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CashinController;
```

### <a name="create_cashin_preauth"></a>![Method: ](https://apidocs.io/img/method.png ".CashinController.createCashinPreauth") createCashinPreauth

> Cashin pre-authorization. Acceptor (Agent or Merchant) needs to do a Preauthorization before making a confirmed Cash-in Transaction. Once Acceptor get pre-authorization token, the pre-authorized transaction needs to be validated by at least 2 Authentification methods using token.


```javascript
function createCashinPreauth(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new TransactionsCashinRequest({"key":"value"});

    controller.createCashinPreauth(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="create_cashin_make"></a>![Method: ](https://apidocs.io/img/method.png ".CashinController.createCashinMake") createCashinMake

> Making a Cashin transaction for a Client. ( Client recharges his/her wallet account by first  giving cash to Agent then Agent recharges Client Account with e-money from his Agent Account. E-money is debited from Agent Account and then credited to Client  wallet Account)


```javascript
function createCashinMake(transactionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';

    controller.createCashinMake(transactionToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




[Back to List of Controllers](#list_of_controllers)

## <a name="cashout_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CashoutController") CashoutController

### Get singleton instance

The singleton instance of the ``` CashoutController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CashoutController;
```

### <a name="create_cashout_preauth"></a>![Method: ](https://apidocs.io/img/method.png ".CashoutController.createCashoutPreauth") createCashoutPreauth

> Cashout pre-authorization


```javascript
function createCashoutPreauth(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new TransactionsCashoutRequest({"key":"value"});

    controller.createCashoutPreauth(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="create_cashout_make"></a>![Method: ](https://apidocs.io/img/method.png ".CashoutController.createCashoutMake") createCashoutMake

> Cashout transaction


```javascript
function createCashoutMake(transactionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';

    controller.createCashoutMake(transactionToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




[Back to List of Controllers](#list_of_controllers)

## <a name="payment_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PaymentController") PaymentController

### Get singleton instance

The singleton instance of the ``` PaymentController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PaymentController;
```

### <a name="create_payment_preauth"></a>![Method: ](https://apidocs.io/img/method.png ".PaymentController.createPaymentPreauth") createPaymentPreauth

> Payment pre-authorization


```javascript
function createPaymentPreauth(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new TransactionsPaymentRequest({"key":"value"});

    controller.createPaymentPreauth(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="create_payment_make"></a>![Method: ](https://apidocs.io/img/method.png ".PaymentController.createPaymentMake") createPaymentMake

> Payment transaction


```javascript
function createPaymentMake(transactionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';

    controller.createPaymentMake(transactionToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




[Back to List of Controllers](#list_of_controllers)

## <a name="bill_payment_controller"></a>![Class: ](https://apidocs.io/img/class.png ".BillPaymentController") BillPaymentController

### Get singleton instance

The singleton instance of the ``` BillPaymentController ``` class can be accessed from the API Client.

```javascript
var controller = lib.BillPaymentController;
```

### <a name="load_biller_tree"></a>![Method: ](https://apidocs.io/img/method.png ".BillPaymentController.loadBillerTree") loadBillerTree

> Bill issuers list


```javascript
function loadBillerTree(billItemId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| billItemId |  ``` Optional ```  | root item to use to get a subset of this tree |



#### Example Usage

```javascript

    var billItemId = 'billItemId';

    controller.loadBillerTree(billItemId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="create_init_paybill"></a>![Method: ](https://apidocs.io/img/method.png ".BillPaymentController.createInitPaybill") createInitPaybill

> 
> <details>
>   <summary>An example of paybill call flow (click to expand)</summary>
>   
>   ```js
>   function paybill(apiClient, billIssuerId, clientIdentifier) {
>       // initiate paybill transaction
>       let response = apiClient.post("/transactions/paybill", {billIssuerId: billIssuerId, clientIdentifier: clientIdentifier});
>       let transactionToken = response.body.transactionToken;
>       let userSubmittedValues = null;
>   
>       // making multiple preauth
>       while(true) {
>           response = apiClient.patch("/transactions/paybill/" + transactionToken, {inputs: userSubmittedValues});
>           if (response.code === 201) {
>               break;
>           }
>           userSubmittedValues = askUserInput(response.body.inputs);
>       }
>       
>       // making authentification
>       makeAuth(transactionToken)
>   
>       // making transaction
>       apiClient.post("/transactions/paybill/" + transactionToken);
>   }
>   
>   function askUserInput(inputs) {
>       // ui logic to ask user to fill inputs
>   }
>   
>   function makeAuth(transactionToken)
>   {
>       // logic to make authentication
>   }
>   ```
> 
> </details>
> 


```javascript
function createInitPaybill(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = {
        id : 21
    };

    controller.createInitPaybill(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="update_submit_paybill_info"></a>![Method: ](https://apidocs.io/img/method.png ".BillPaymentController.updateSubmitPaybillInfo") updateSubmitPaybillInfo

> Paybill pre-authorization


```javascript
function updateSubmitPaybillInfo(transactionToken, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';
    var body = new TransactionsPaybillRequest({"key":"value"});

    controller.updateSubmitPaybillInfo(transactionToken, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="create_paybill"></a>![Method: ](https://apidocs.io/img/method.png ".BillPaymentController.createPaybill") createPaybill

> Paybill transaction


```javascript
function createPaybill(transactionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';

    controller.createPaybill(transactionToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




[Back to List of Controllers](#list_of_controllers)

## <a name="reversal_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ReversalController") ReversalController

### Get singleton instance

The singleton instance of the ``` ReversalController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ReversalController;
```

### <a name="create_reversal_preauth"></a>![Method: ](https://apidocs.io/img/method.png ".ReversalController.createReversalPreauth") createReversalPreauth

> Reversal pre-authorization


```javascript
function createReversalPreauth(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new TransactionsReversalRequest({"key":"value"});

    controller.createReversalPreauth(body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="create_reversal_make"></a>![Method: ](https://apidocs.io/img/method.png ".ReversalController.createReversalMake") createReversalMake

> Reversal transaction


```javascript
function createReversalMake(transactionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';

    controller.createReversalMake(transactionToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




[Back to List of Controllers](#list_of_controllers)

## <a name="authentication_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthenticationController") AuthenticationController

### Get singleton instance

The singleton instance of the ``` AuthenticationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AuthenticationController;
```

### <a name="update_verify_acceptor_pincode"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.updateVerifyAcceptorPincode") updateVerifyAcceptorPincode

> Should be called when requested authentication mode is `PINCODE_ACCEPTOR`


```javascript
function updateVerifyAcceptorPincode(transactionToken, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';
    var body = new AuthenticationsPincodeAcceptorVerifyRequest({"key":"value"});

    controller.updateVerifyAcceptorPincode(transactionToken, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="update_verify_client_pincode"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.updateVerifyClientPincode") updateVerifyClientPincode

> Should be called when requested authentication mode is `PINCODE_CLIENT`


```javascript
function updateVerifyClientPincode(transactionToken, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';
    var body = new AuthenticationsPincodeClientVerifyRequest({"key":"value"});

    controller.updateVerifyClientPincode(transactionToken, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="update_verify_pincode_client_ivr"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.updateVerifyPincodeClientIVR") updateVerifyPincodeClientIVR

> Should be called when requested authentication mode is `PINCODE_CLIENT_IVR`.
> 
> This endpoint uses [Server Sent Events](#section/Server-Sent-Events)
> 


```javascript
function updateVerifyPincodeClientIVR(transactionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';

    controller.updateVerifyPincodeClientIVR(transactionToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="update_send_client_otp"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.updateSendClientOTP") updateSendClientOTP

> Should be called when requested authentication mode is `OTP_CLIENT`


```javascript
function updateSendClientOTP(transactionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';

    controller.updateSendClientOTP(transactionToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="update_verify_client_otp"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.updateVerifyClientOTP") updateVerifyClientOTP

> Should be called when requested authentication mode is `OTP_CLIENT`, after that OTP was sent


```javascript
function updateVerifyClientOTP(transactionToken, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';
    var body = new AuthenticationsOtpClientVerifyRequest({"key":"value"});

    controller.updateVerifyClientOTP(transactionToken, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="update_verify_nsdt"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.updateVerifyNSDT") updateVerifyNSDT

> Should be called when requested authentication mode is `NSDT_CLIENT`.
> 
> This endpoint uses [Server Sent Events](#section/Server-Sent-Events)
> 
> When event call status is `CONNECTED`, the API Client should start playing NSDT token.
> 
> When event call status is in `SUCCESS`, `HANG_UP`, `TIMEOUT`, the API Client should stop playing NSDT token.
> 


```javascript
function updateVerifyNSDT(transactionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';

    controller.updateVerifyNSDT(transactionToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="update_verify_qr_code"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.updateVerifyQrCode") updateVerifyQrCode

> Should be called when requested authentication mode is `QR_CODE_CLIENT`.
> 
> This endpoint uses [Server Sent Events](#section/Server-Sent-Events)
> 


```javascript
function updateVerifyQrCode(transactionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';

    controller.updateVerifyQrCode(transactionToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




### <a name="delete_cancel_transaction"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.deleteCancelTransaction") deleteCancelTransaction

> Can cancel an ongoing transaction


```javascript
function deleteCancelTransaction(transactionToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| transactionToken |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var transactionToken = 'transactionToken';

    controller.deleteCancelTransaction(transactionToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | Request could not be processed |




[Back to List of Controllers](#list_of_controllers)



