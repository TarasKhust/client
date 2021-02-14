## domainNamesSelectors
Domain Names Selectors

**Requires**: <code>module:domainNamesReducer</code>
**Example**
```js
import * as domainNamesSelectors from "selectors/domainNames.selectors";
```
<a name="module_getDomainSearch"></a>

## getDomainSearch ⇒ <code>Object</code>
Get full state of domain search

**Example**
```js
const domainNames = useSelector(getDomainSearch);;
```
<a name="module_getInProgress"></a>

## getInProgress ⇒ <code>boolean</code>
Returns is any domain search request in progress

**Example**
```js
const isInProgress = useSelector(getInProgress);;
```
<a name="module_getIsFetched"></a>

## getIsFetched ⇒ <code>boolean</code>
Returns is all required data fetched

**Example**
```js
const isFetched = useSelector(getIsFetched);;
```
<a name="module_getHasError"></a>

## getHasError ⇒ <code>error</code>
Has any error in error collection

**Example**
```js
const hasError = useSelector(getHasError);;
```
<a name="module_getSearchMode"></a>

## getSearchMode ⇒ <code>number</code>
UI helper. Get active search mode

**Example**
```js
const searchMode = useSelector(getSearchMode);;
```
<a name="module_getBulk"></a>

## getBulk ⇒ <code>number</code>
UI helper. Get domain name input mode

**Example**
```js
const isBulk = useSelector(getBulk);;
```
<a name="module_getProgressList"></a>

## getProgressList ⇒ <code>Array</code>
Get list of domains in progress

**Example**
```js
const progressList = useSelector(getProgressList);;
```
<a name="module_getFilteredList"></a>

## getFilteredList ⇒ <code>Array</code>
Get filtered tld list, that available for domain name search

**Example**
```js
const filteredTldList = useSelector(getFilteredList);;
```
<a name="module_hasFilteredList"></a>

## hasFilteredList ⇒ <code>boolean</code>
Has filtered tld list

**Example**
```js
const hasFilteredTldList = useSelector(hasFilteredList);;
```
<a name="module_isDomainInProgress"></a>

## isDomainInProgress ⇒ <code>function</code>
Get progress state for domain name


| Param |
| --- |
| domain |

**Example**
```js
const isDomainInProgress = useSelector(isDomainInProgress(domainName));
```
<a name="module_checkDomainProgress"></a>

## checkDomainProgress ⇒ <code>function</code>
Alias for isDomainInProgress. Get callback function to check progress state for domain name.

**Example**
```js
const domainInProgress = useSelector(isDomainInProgress)(domainName);
```
<a name="module_getErrorCollection"></a>

## getErrorCollection ⇒ <code>Object</code>
Get domains collection with rejection error

**Example**
```js
const errorCollection = useSelector(getErrorCollection);
```
<a name="module_getDomainResult"></a>

## getDomainResult ⇒ <code>function</code>
Get search result details state by domainName


| Param |
| --- |
| domain |

**Example**
```js
const searchCollection = useSelector(getDomainResult);
```
<a name="module_isPremiumDomain"></a>

## isPremiumDomain ⇒ <code>function</code>
Returns is domain has premium status


| Param |
| --- |
| domain |

**Example**
```js
const isPremium = useSelector(isPremiumDomain(domainName));
```
<a name="module_hasDomainResults"></a>

## hasDomainResults ⇒ <code>function</code>
Returns is domain has search results state


| Param |
| --- |
| domain |

**Example**
```js
const hasResults = useSelector(hasDomainResults(domainName));
```
<a name="module_getResultsCollection"></a>

## getResultsCollection ⇒ <code>Object</code>
Get search result collection

**Example**
```js
const searchCollection = useSelector(getResultsCollection);
```
<a name="module_hasDomainError"></a>

## hasDomainError ⇒ <code>function</code>
Returns is domain has rejection error


| Param |
| --- |
| domain |

**Example**
```js
const hasError = useSelector(hasDomainError(domainName));
```
<a name="module_isTldExist"></a>

## isTldExist ⇒ <code>function</code>
Is tld value legal


| Param |
| --- |
| tld |

**Example**
```js
const isExists = useSelector(isTldExist(tld));
```
<a name="module_splitDomainName"></a>

## splitDomainName ⇒ <code>function</code>
Returns separated domain and tld values


| Param |
| --- |
| domainName |

**Example**
```js
const {
	domain, tld
} = useSelector(splitDomainName(domainName));
```
<a name="module_filterDomainInput"></a>

## filterDomainInput ⇒ <code>function</code>
UI helper. Parse domain input value


| Param |
| --- |
| domainInput |
| minLength |

**Example**
```js
const domainName = useSelector(filterDomainInput(domainInput, minLength));
```
<a name="module_filterDomainInputMultiline"></a>

## filterDomainInputMultiline ⇒ <code>function</code>
UI helper. Parse domain multiline input value


| Param |
| --- |
| inputMulti |
| minLength |

**Example**
```js
const domainNames = useSelector(filterDomainInputMultiline(inputMulti, minLength));
```
<a name="module_getTldFilters"></a>

## getTldFilters ⇒ <code>object</code>
Get tld keys list with loaded price

**Example**
```js
const tldFilters = useSelector(getTldFilters);
```
**Example**
```js
Returns:
{
    priceRange: {
        minPrice: number,
        maxPrice: number,
    },
    priceRangeActive: number,
    tldLength: {
        minLength: number,
        maxLength: number,
    },
    tldLengthActive: number,
    newDomains: boolean,
    location: {
        [string]: string,
    },
    locationActive: string,
    category:{
        [string]: string,
    },
    categoryActive: string,
}
```
<a name="module_hasTldFilters"></a>

## hasTldFilters ⇒ <code>boolean</code>
Return is tld filters empty

**Example**
```js
const hasTldFilters = useSelector(hasTldFilters);
```
<a name="module_getActiveFilters"></a>

## getActiveFilters ⇒ <code>Object</code>
Get active filters

**Example**
```js
const activeFilters = useSelector(getActiveFilters);
```
<a name="module_getTldCollection"></a>

## getTldCollection ⇒ <code>object</code>
Get collection for all TLDs params

**Example**
```js
const tldCollection = useSelector(getTldCollection);
```
<a name="module_hasTldCollection"></a>

## hasTldCollection ⇒ <code>boolean</code>
Returns is tld collection empty

**Example**
```js
const hasTldCollection = useSelector(hasTldCollection);
```
<a name="module_getParamsByTld"></a>

## getParamsByTld ⇒ <code>function</code>
Get loaded params for tld


| Param |
| --- |
| tld |

**Example**
```js
const tldParams = useSelector(getParamsByTld(tld));
```
**Example**
```js
Returns:
{
    registryId: number,
    defaultPeriod: number,
    isPreReg: boolean,
    isNewTld: boolean,
    isMostPopular: boolean,
    category: array,
    location: array,
    registerPrice: array,
    renewPrice: array,
    transferPrice: array,
    bulkPrice: array,
}
```
<a name="module_getDefaultPeriodByTld"></a>

## getDefaultPeriodByTld ⇒ <code>function</code>
Get TLD default period value


| Param |
| --- |
| tld |

**Example**
```js
const defaultPeriod = useSelector(getDefaultPeriodByTld(tld));
```
<a name="module_getRegisterPrice"></a>

## getRegisterPrice ⇒ <code>function</code>
Get register price for tld


| Param |
| --- |
| tld |

**Example**
```js
const registerPrice = useSelector(getRegisterPrice(tld));
```
<a name="module_hasRegisterPrice"></a>

## hasRegisterPrice ⇒ <code>function</code>
Is register price for tld loaded


| Param |
| --- |
| tld |

**Example**
```js
const hasRegisterPrice = useSelector(hasRegisterPrice(tld));
```
<a name="module_getRegisterPriceByPeriod"></a>

## getRegisterPriceByPeriod ⇒ <code>function</code>
Get register price for tld by period


| Param |
| --- |
| tld |
| period |

**Example**
```js
const price = useSelector(getRegisterPriceByPeriod(tld, period));
```
<a name="module_getRegisterPriceDefault"></a>

## getRegisterPriceDefault ⇒ <code>function</code>
Get register price for tld by default period


| Param |
| --- |
| tld |

**Example**
```js
const price = useSelector(getRegisterPriceDefault(tld));
```
<a name="module_getRenewPrice"></a>

## getRenewPrice ⇒ <code>function</code>
Get renew price for tld


| Param |
| --- |
| tld |

**Example**
```js
const renewPrice = useSelector(getRenewPrice(tld));
```
<a name="module_hasRenewPrice"></a>

## hasRenewPrice ⇒ <code>function</code>
Is renew price for tld loaded


| Param |
| --- |
| tld |

**Example**
```js
const hasRenewPrice = useSelector(hasRenewPrice(tld));
```
<a name="module_getRenewPriceByPeriod"></a>

## getRenewPriceByPeriod ⇒ <code>function</code>
Get renew price for tld by period


| Param |
| --- |
| tld |
| period |

**Example**
```js
const hasRenewPrice = useSelector(hasRenewPrice(tld));
```
<a name="module_hasBackorderPrice"></a>

## hasBackorderPrice ⇒ <code>boolean</code>
Is backorder price for tld loaded

**Example**
```js
const hasBackorderPrice = useSelector(hasBackorderPrice);
```
<a name="module_getBackorderPrice"></a>

## getBackorderPrice ⇒ <code>function</code>
Get backorder price for tld


| Param |
| --- |
| tld |

**Example**
```js
const backorderPrices = useSelector(getBackorderPrice);
```
<a name="module_getBackorderPriceByCount"></a>

## getBackorderPriceByCount ⇒ <code>function</code>
Get backorder price for tld by count


| Param |
| --- |
| count |

**Example**
```js
const price = useSelector(getBackorderPriceByCount(count));
```
<a name="module_getTransferPrice"></a>

## getTransferPrice ⇒ <code>function</code>
Get transfer price for tld


| Param |
| --- |
| tld |

**Example**
```js
const transferPrice = useSelector(getTransferPrice(tld));
```
<a name="module_hasTransferPrice"></a>

## hasTransferPrice ⇒ <code>function</code>
Is transfer price for tld loaded


| Param |
| --- |
| tld |

**Example**
```js
const hasTransferPrice = useSelector(hasTransferPrice(tld));
```
<a name="module_getBulkPrice"></a>

## getBulkPrice ⇒ <code>function</code>
Get transfer price for tld


| Param |
| --- |
| tld |

**Example**
```js
const bulkPrice = useSelector(getBulkPrice(tld));
```
<a name="module_hasBulkPrice"></a>

## hasBulkPrice ⇒ <code>function</code>
Is transfer price for tld loaded


| Param |
| --- |
| tld |

**Example**
```js
const hasBulkPrice = useSelector(hasBulkPrice(tld));
```
<a name="module_getTldListByMostPopular"></a>

## getTldListByMostPopular ⇒ <code>array</code>
Get tld list by param "isMostPopular"

**Example**
```js
const mostPopular = useSelector(getTldListByMostPopular);
```
