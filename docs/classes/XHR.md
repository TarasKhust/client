class XHR (XMLHttpRequest)
----------

Class XHR designed to make XMLHttpRequest easier for use.
Core based on usage of npm *superagent*.

**Main features:**
 - provide methods for direct request method type (get, post, patch, ...)
 - append authorization token to each request (security policy)
 - process any response and parse it to a single format object
 - ability to *mock* data
 - request methods returns *Promise*
 
--------------
## **Usage:**
Import instance:
 ```javascript
 import XHR from "classes/XHR";
 ```

Import static:
 ```javascript
 import { XHRConstructor } from "classes/XHR";
 ```

Resolve/Reject response object

```javascript
{
    status: Boolean,
    data: Object,
    message: String,
}
```

```javascript
XHR
    .get({
        url: "/",
        data: {
            // params
        }
    })
    .then(({ status, data, message }) => {
        // response process
    })
    .catch(({ status, data, message }) => {
        // response process
    })
```
------------
## **Instance Methods:**

_**XHR.get**_

Send XMLHttpRequest with method *GET*

example:
```javascript
XHR.get({
    url: "",
    data: {
        // request params
    }
})
```

params | type | description
------------ | ------------- | -------------
url | string | url to request to
data | object | data to be converted to request params


_**XHR.post**_

Send XMLHttpRequest with method *POST* and content type *application/x-www-form-urlencoded*

example:
```javascript
XHR.post({
    url: "",
    data: {
        // request params
    }
})
```

params | type | description
------------ | ------------- | -------------
url | string | url to request to
data | object | data to be converted to request params

_**XHR.patch**_

Send XMLHttpRequest with method *PATCH*

example:
```javascript
XHR.patch({
    url: "",
    data: {
        // request params
    }
})
```

params | type | description
------------ | ------------- | -------------
url | string | url to request to
data | object | data to be converted to request params

_**XHR.delete**_

Send XMLHttpRequest with method *DELETE*

example:
```javascript
XHR.delete({
    url: "",
    data: {
        // request params
    }
})
```

params | type | description
------------ | ------------- | -------------
url | string | url to request to
data | object | data to be converted to request params

-------------

## **Static Methods:**

_**XHRConstructor.appendToken**_

Add to data object new param "ajax_token" with token value.
Returns modified object.

params | type | description
------------ | ------------- | -------------
data | object | data object to add token param

_**XHRConstructor.getAjaxToken**_

Returns actual token value.

params | type | description
------------ | ------------- | -------------
- | - | -

_**XHRConstructor.parseResponse**_

First method that process response data after superagent request.
Leads response data to object type.
Resolve/Reject request promise depends on response statusCode.

params | type | description
------------ | ------------- | -------------
response | object | response full data with statusCode

_**XHRConstructor.validateResponse**_

Checks parsed response params.
Process **redirect** param. If this param exist and it is string value, use value as url to immediately redirect client.
Remove redirect param from response.
Resolve/Reject request promise depends on response status param.

params | type | description
------------ | ------------- | -------------
response | object | parsed response data

_**XHRConstructor.responseObject**_

Spread response data params.
Method always retrun response data with keys *status*, *message*, *data*, *redirect*.

params | type | description
------------ | ------------- | -------------
response | object | parsed response data

----------
apiHelpers
----------

_**responseSchema**_

Validate response data object with Ajv schema.
Return function to get response object.
Validate function will reject Promise, with a message param, if data is not valid.

> !NOTE validate not full response object, only response.data object if response.status is boolean true

params | type | description
------------ | ------------- | -------------
schema | object | Ajv validation schema
options | object | Ajv validation options

example:
```javascript
import { responseSchema } from "helpers/apiHelpers";

XHR
	.get()
	.then(responseSchema(/* validation schema */))

```

> for more details, how to create validation schema, visit [Ajv home page](https://ajv.js.org/)

_**responseFormValidation**_

Trigger Form validation if validation object exist in response.data.
Conditions to execute Form validation:
 - validation object must have *form_id* string param
 - validation object must have *errors* object param

params | type | description
------------ | ------------- | -------------
response | object | response object

example:
```javascript
import { responseFormValidation } from "helpers/apiHelpers";

XHR
	.post()
	.then(responseFormValidation)

```

--------------
Mock API
--------------

Mock API means - imitates a real API server by providing realistic response without request to server.

XHR class has ability to mock data using **superagent-mock** plugin.

Cases to use mock data:
 - run unit tests
 - develop new feature while server-side endpoint is not ready
 - as response example to create response validation schema

To mock any API request you will need:
 - .json data file with realistic response example (recommended, but not required)
 - mock configuration file
 
Response .json example can be taken from real request to server, or can be created manually from endpoint documentation.

Mock configuration file example:
```javascript
import superAgent from "superagent";
import superAgentMock from "superagent-mock";
import normalResponse from "./normalResponse.json";

const config = [
	{
		pattern: "(.*)/ajax/",
		fixtures: () => normalResponse,
		callback: (match, data) => ({
			statusCode: 200,
			body: data
		}),
	}
];

export default superAgentMock(superAgent, config);
```

**To apply this configuration, need just import it to application.**

Step by step:
 - import modules and plugins
```javascript
import superAgent from "superagent";
import superAgentMock from "superagent-mock";
```
 - import response example
```javascript
import normalResponse from "./normalResponse.json";
```
 - create superagent-mock configuration
```javascript
// each element of an array is configuration for a single url response
const config = [
    {
        /**
         * pattern to match request url
         */
        pattern: "(.*)/ajax/",
        /**
         * if request match pattern, execute fixtures function
         * fixtures always returns response body data
         * data can be generated or proceed by request params
         *
         * @param match array Result of the resolution of the regular expression
         * @param params object sent by 'send' function
         * @param headers object set by 'set' function
         * @param context object the context of running the fixtures function
         */ 
        fixtures: (match, params, headers, context) => normalResponse,
        /**
         * returns the result for any matched request
         *
         * @param match array Result of the resolution of the regular expression
         * @param data  mixed Data returns by `fixtures` attribute
         */
        callback: (match, data) => ({
            statusCode: 200,
            body: data
        }),
    }
];
```
 - export superAgentMock instance to be able to *unset* mock configuration
```javascript
export default superAgentMock(superAgent, config);
```

> for more details visit [plugin home page](https://www.npmjs.com/package/superagent-mock)

