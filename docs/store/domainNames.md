## Redux Store state

---------

> Redux namespace:
> __domainNames__
>
> Action prefix:
> __DOMAIN_NAMES__

---------

### Full state:
```javascript
domainNames: {
    isFetched: Boolean,
    hasRequestError: Boolean,
    tldFiltersApplied: Boolean,
    isBulk: Boolean,
    searchMode: Number,
    requestError: String,
    domainValues: Array([
        {
            domain: String,
            tld: String,
        }
        // or empty Array
    ]),
    filteredTldList: Array([
        String,
        // or empty Array
    ]),
    tldFilters: {
        priceRange: {
            minPrice: Number,
            maxPrice: Number,
        },
        mostPopular: Array([
            String,
            // or empty Array
        ]),
        mostPopularActive: Array([
            String,
            // or empty Array
        ]),
        priceRangeActive: Number,
        tldLength: {
            minLength: Number,
            maxLength: Number,
        },
        tldLengthActive: Number,
        newDomains: Boolean,
        location: {
            [String]: String,
        },
        locationActive: String,
        category:{
            [String]: String,
        },
        categoryActive: String,
    },
    tldFiltersSaved: {
        location: Array([
            String,
            // or empty Array
        ]),
        category: Array([
            String,
            // or empty Array
        ]),
        az: Array([
            String,
            // or empty Array
        ]),
        input: Array([
            String,
            // or empty Array
        ]),
        isMostPopular: Boolean,
        isNewTld: Boolean,
    },
    tldCollection: {
        [String]: {
            defaultPeriod: 1,
            isPreReg: false,
            registerPrice: Array([
                {
                    period: Number,
                    sale: Number,
                    retail: Number,
                }
                // or empty Array
            ]),
            renewPrice: Array([
                {
                    period: Number,
                    sale: Number,
                    retail: Number,
                }
                // or empty Array
            ]),
            transferPrice: Array([
                {
                   period: Number,
                   sale: Number,
                   retail: Number,
                }
                // or empty Array
            ]),
            bulkRegisterPrice: Array([
                {
                    count: Number,
                    sale: Number,
                    retail: Number,
                }
                // or empty Array
            ]),
            bulkRenewPrice: Array([
                {
                    count: Number,
                    sale: Number,
                    retail: Number,
                }
                // or empty Array
            ]),
            bulkTransferPrice: Array([
                {
                    count: Number,
                    sale: Number,
                    retail: Number,
                }
                // or empty Array
            ]),
            category: Array([
                String,
                // or empty Array
            ]),
            location: Array([
                String,
                // or empty Array
            ]),
            isMostPopular: Boolean,
            isNewTld: Boolean,
        }
    },
    searchCollection: {
        tld: String,
        domain: String,
        inProgress: Boolean,
        timestamp: Number,
        errorMessage: String,
        isPremium: Boolean,
        available: String,
        period: Number,
        premiumPrice: Array([
            {
                period: Number,
                sale: Number,
                retail: Number,
            }
            // or empty Array
        ]),
        resalePrice: Array([
            {
                period: Number,
                sale: Number,
                retail: Number,
            }
            // or empty Array
        ]),
        regularPrice: Array([
            {
                period: Number,
                sale: Number,
                retail: Number,
            }
            // or empty Array
        ]),
    },
    backorderPrices: Array([
        {
            period: Number,
            sale: Number,
            retail: Number,
        }
        // or empty Array
    ]),
}
```

---------

### State description

#### isFetched
> Displays all required data has been fetched:
> - getFullTldList
> - getTldFilters

> Action types:
> - SET_IS_FETCHED

#### hasRequestError
#### requestError
> Display that last request has an Error.
> Error message of last failed request.
> Called on reject requests:
> - getTldListByFilters (remove error on success)
> - getFullTldList
> - getTldMainPrice
> - getTldBulkPrice
> - getTldAllPrices
> - getTldRegularPrices
> - getTldBackorderPrice
> - getTldFilters

> Action types:
> - SET_REQUEST_ERROR

#### tldFiltersApplied
> UI helper. Display that any tld filter applied.

> Action types:
> - SET_TLD_FILTERS_APPLIED

#### isBulk
> UI domain input type. Single domain input or bulk domains (textarea)
> This flag will affect input value parse.

> Action types:
> - SET_BULK

#### searchMode
> Active search mode type.
> Will affect domain options config and returned price from selectors.

> Action types:
> - SET_SEARCH_MODE

#### domainValues
> Parsed input domain + tld values in Array.
> In bulk search case will contain multiple elements.

> Action types:
> - SET_DOMAIN_VALUES

#### filteredTldList
> Result of filtering tld collection. Contains only tld values.
> Recommend to use ONLY with _filterTldList_ action creator.

> Action types:
> - SET_FILTERED_TLD_LIST

#### tldFilters
> Predefined filters values and default selected values from back-end.
> Required for TldFiltersOverlay.

> Action types:
> - SET_TLD_FILTERS

| param | default | desc |
| ----- | ------- | ----- |
| priceRange | Object | minPrice/maxPrice for all tlds |
| mostPopular | Array | Collection of tlds by filter isMostPopular |
| mostPopularActive | Array | Collection of tlds by filter isMostPopular that should be active on page/component load |
| priceRangeActive | Number | Active value of priceRange on page/component load |
| tldLength | Object | minLength/maxLength for all tld values |
| tldLengthActive | Number | Active value of tldLength on page/component load |
| newDomains | Boolean | Active value of filter isNewTld on page/component load |
| location | Object | Collection of all possible location filters where key is a filter key and value is filter name |
| category | Object | Collection of all possible category filters where key is a filter key and value is filter name |
| locationActive | String | Active value of location filter on page/component load |
| categoryActive | String | Active value of category filter on page/component load |

#### tldFiltersSaved
> Keys of fetched filters results.
> Gives ability to apply local filters without server-side request to filter tld list.

> Action types:
> - SET_SAVED_FILTER_RESULTS

| param | default | desc |
| ----- | ------- | ----- |
| location | empty Array | tld list by this _locations_ has been fetched |
| category | empty Array | tld list by this _categories_ has been fetched |
| az | empty Array | tld list by this _alphabet letters_ has been fetched |
| input | empty Array | tld list by this _input values_ has been fetched |
| isMostPopular | false | tld list by this feature _isMostPopular_ has been fetched |
| isNewTld | false | tld list by this feature _isNewTld_ has been fetched |

#### tldCollection
> Collection of TLDs with default parameters and prices for all search modes

> Action types:
> - MERGE_TLD_COLLECTION

| param | default | desc |
| ----- | ------- | ----- |
| defaultPeriod | 1 | tld default period to buy |
| isPreReg | false | pre-registration status, displays that tld is not available to register now, but able to be added to shopping cart for future parches |
| registerPrice | empty Array | tld prices to register by period |
| renewPrice | empty Array | tld prices to renew by period |
| transferPrice | empty Array | tld prices to transfer by period |
| bulkRegisterPrice | empty Array | same to registerPrice, but with prices by a number (count) of domain names with same tld in shopping cart |
| bulkRenewPrice | empty Array | same to renewPrice, but with prices by a number (count) of domain names with same tld in shopping cart |
| bulkTransferPrice | empty Array | same to transferPrice, but with prices by a number (count) of domain names with same tld in shopping cart |
| category | not defined | filter key; displays witch filters this tld belongs to; will be defined only if tld has been fetched by any _category_ filter |
| location | not defined | filter key; displays witch filters this tld belongs to; will be defined only if tld has been fetched by any _location_ filter |
| isMostPopular | not defined | filter key; displays witch filters this tld belongs to; will be defined only if tld has been fetched by _isMostPopular_ filter |
| isNewTld | not defined | filter key; displays witch filters this tld belongs to; will be defined only if tld has been fetched by _isNewTld_ filter |

#### searchCollection
> Collection of domain search results with status and premium/resale prices.

> Action types:
> - MERGE_SEARCH_COLLECTION

| param | default | desc |
| ----- | ------- | ----- |
| tld | tld value | tld to search |
| domain | domain value | domain to search |
| inProgress | false | search request progress status for this domain name |
| timestamp | Date.now | last update time for this domain name |
| errorMessage | empty String | search request error message |
| isPremium | false | search result parameter; displays that domain name has _premium_ status |
| isResale | false | search result parameter; displays that domain name has _resale_ status |
| available | empty String | search result parameter; displays domain name registrant status |
| period | 1 | search result parameter; period value to by for domain names with _premium/resale_ status |
| premiumPrice | empty Array | search result parameter; price values by period for domain names with _premium_ status |
| resalePrice | empty Array | search result parameter; price values by period for domain names with _resale_ status |
| regularPrice | empty Array | search result parameter; price values by period for domain names without _premium/resale_ status |

#### backorderPrices
> Collection of prices by period to _backorder_ domains by tld.
> Prices are the same for all domain names with _available_ status _0_ (backorder).

> Action types:
> - SET_BACKORDER_PRICES
