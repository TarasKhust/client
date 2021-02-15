Domain Search
-------------

#### Reducer state:

```javascript
import { store } from "store";
import domainSearch, { key as domainSearchKey } from "reducers/domainSearch.reducer";

store.injectReducer(domainSearchKey, domainSearch);
```

name | type | default | desc
------------ | ------------- | ------------- | -------------
inProgress | boolean | false | Display is any domain search request in progress
progressList | array | empty array | List of domains in progress
hasError | boolean | false | Display is any domain search request has an Error
errorCollection | object | empty object | Collection of request errors
premiumCollection | object | empty object | Collection of premium domain
searchCollection | object | empty object | Collection of domain search results
availableOptions | object | predefined object | Predefined. Domain available status options. Cannot be changed.
availableTldList | object | empty object | List of available tld with registry id.

----------------

#### State selectors:

```javascript
import { useSelector } from "react-redux";
import * as selectors from "selectors/domainSearch.selectors";
```

**getDomainSearch** _object_
> Get full state of domain search
```javascript
const {
	inProgress, progressList, hasError, errorCollection, premiumCollection, searchCollection,
    availableOptions, availableTldList,
} = useSelector(selectors.getDomainSearch);
```

**getInProgress** _boolean_
> Returns is any domain search request in progress
```javascript
const inProgress = useSelector(selectors.getInProgress);
```

**getHasError** _boolean_
> Get is any domain search request has an Error
```javascript
const hasError = useSelector(selectors.getHasError);
```

**getProgressList** _array_
> Get list of domains in progress
```javascript
const progressList = useSelector(selectors.getProgressList);
```

**isDomainInProgress** _boolean_
> Get progress state for domain name
```javascript
const domainInProgress = useSelector(selectors.isDomainInProgress(/* domainName */));
```

**checkDomainProgress** _function_
> Alias for isDomainInProgress.
> Get callback function to check progress state for domain name.
```javascript
const isDomainInProgress = useSelector(selectors.checkDomainProgress);

// do something, then

const domainInProgress = isDomainInProgress(/* domainName */);
```

**getRejectedDomains** _object_
> Get domains collection with rejection error
```javascript
const rejectedDomains = useSelector(selectors.getRejectedDomains);
```

**getPremiumCollection** _object_
> Get domains collection with premium status and prices
```javascript
const premiumDomains = useSelector(selectors.getPremiumCollection);
```

**isPremiumDomain** _boolean_
> Returns is domain has premium status
```javascript
const isPremium = useSelector(selectors.isPremiumDomain(/* domainName */)));
```

**getPremiumDomain** _object_
> Get premium details state by domainName
```javascript
const premiumDomain = useSelector(selectors.getPremiumDomain(/* domainName */)));
```

**hasDomainResults** _boolean_
> Returns is domain has search results state
```javascript
const hasResult = useSelector(selectors.hasDomainResults(/* domainName */)));
```

**getResultsCollection** _object_
> Get search result collection
```javascript
const searchResults = useSelector(selectors.getResultsCollection));
```

**getDomainResult** _object_
> Get search result details state by domainName
```javascript
const domainResults = useSelector(selectors.getDomainResult(/* domainName */));
```

**hasDomainError** _boolean_
> Returns is domain has rejection error
```javascript
const isDomainError = useSelector(selectors.hasDomainError(/* domainName */));
```

**getDomainError** _object_
> Get rejection error state by domain name
```javascript
const domainError = useSelector(selectors.getDomainError(/* domainName */));
```

**getAvailabilityOptions** _object_
> Get available options of domain status
```javascript
const availableOptions = useSelector(selectors.getAvailabilityOptions);
```

**getAvailabilityOptionsByKey** _object_
> Get available option of domain status by status key
```javascript
const statusOption = useSelector(selectors.getAvailabilityOptions(/* statusKey */));
```

**getAvailableTldList** _object_
> Get collection of all available TLDs
```javascript
const availableTldList = useSelector(selectors.getAvailableTldList);
```

**getRegistryIdByTld** _object_
> Get registryId by tld from availableTldList
```javascript
const registryId = useSelector(selectors.getRegistryIdByTld(/* tld */));
```

**splitDomainName** _object_
> Returns separated domain and tld values
```javascript
try {
    const {
        domain, tld
    } = useSelector(selectors.splitDomainName(/* domainName */));
} catch (e) {
  // process error for domainName without valid tld
}
```

-------------

#### Actions API:

```javascript
import { useDispatch } from "react-redux";
import * as actions from "actions/domainSearch.actions";
```

**getAvailableTldList** _Promise_
> Request to get available TLDs list

Call stack:
 - api.getTldData
 - then
   - setAvailableTldList > response.data

```javascript
dispatch(actions.getAvailableTldList());
```

**requestStatusByRegistry** _Promise_
> Request to get domain status.
> Set state by domain status.
> Get premium price if domain is premium.

Call stack:
 - pushToProgressList > domainName
 - api.getDomainStatus
 - then
   - pushSearchResults > response.data
   - if premium
     - getPremiumDomainPrice
     - then
       - deleteFromProgressList > domainName
   - else
     - deleteFromProgressList > domainName
 - catch
   - deleteFromProgressList > domainName
   - pushDomainError > response.message

param | type | desc
------------ | ------------- | -------------
domain | string | domain to search
tld | string | tld to make request by registry

```javascript
dispatch(actions.requestStatusByRegistry({
    domain: "",
    tld: ""
}));
```

**searchDomainNameStatus** _Promise_
> Alias for requestDomainStatusWithTld.
> Split domain name to domain and tld, then start request to search status.

param | type | desc
------------ | ------------- | -------------
domainName | string | domain name to get status

```javascript
dispatch(actions.searchDomainNameStatus(/* domainName */));
```

**getPremiumDomainPrice** _Promise_
> Request to get premium price by domain name

Call stack:
 - api.getPremiumDomainPrice
 - then
   - pushDomainPremium > response.data
 - catch
   - pushDomainError > response.message


param | type | desc
------------ | ------------- | -------------
domainName | string | domain name to get price

-------------

#### Actions:

```javascript
import { useDispatch } from "react-redux";
import * as actions from "actions/domainSearch.actions";
```

**toDefault**
> Reset domain search state to default values
```javascript
dispatch(actions.toDefault());
```

**pushToProgressList**
> Add domain name to progress list

param | type
------------ | -------------
domainName | string

```javascript
dispatch(actions.pushToProgressList(/* domainName */));
```

**deleteFromProgressList**
> Delete domain name from progress list

param | type
------------ | -------------
domainName | string

```javascript
dispatch(actions.deleteFromProgressList(/* domainName */));
```

**pushDomainError**
> Add rejection error with message property by domain name. Set timestamp of rejection.

param | type
------------ | -------------
domainName | string
data | object

```javascript
dispatch(actions.pushDomainError(/* domainName, data */));
```

**deleteDomainError**
> Delete rejection error by domain name

param | type
------------ | -------------
domainName | string

returns state:
 - domainName
   - message
   - timestamp

```javascript
dispatch(actions.deleteDomainError(/* domainName */));
```

**pushDomainPremium**
> Add premium domain state to collection. Set timestamp of results.

param | type
------------ | -------------
domainName | string
data | object

returns state:
 - domainName
   - prices
   - period
   - timestamp

```javascript
dispatch(actions.pushDomainPremium(/* domainName, data */));
```

**deleteDomainPremium**
> Delete premium domain state from collection by domain name

param | type
------------ | -------------
domainName | string

```javascript
dispatch(actions.deleteDomainPremium(/* domainName */));
```

**pushSearchResults**
> Add domain name search results state to collection. Set timestamp of results.

param | type
------------ | -------------
domainName | string
data | object

returns state:
 - domainName
   - tld
   - isPremium
   - available
   - domain
   - timestamp

```javascript
dispatch(actions.pushSearchResults(/* domainName, data */));
```

**deleteSearchResults**
> Delete domain search results from collection by domain name

param | type
------------ | -------------
domainName | string

```javascript
dispatch(actions.deleteSearchResults(/* domainName */));
```

**setAvailableTldList**
> et available TLDs list with registry id

param | type
------------ | -------------
availableTldList | object

```javascript
dispatch(actions.setAvailableTldList(/* availableTldList */));
```
