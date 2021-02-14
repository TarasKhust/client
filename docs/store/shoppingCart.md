Shopping Cart
-------------

#### Reducer state:

```javascript
import { store } from "store";
import shoppingCartStore, { key as shoppingCartStoreKey } from "reducers/shoppingCart.reducer";

store.injectReducer(shoppingCartStoreKey, shoppingCartStore);
```

name | type | default | desc
------------ | ------------- | ------------- | -------------
isEmpty | boolean | false | Cart is empty flag
inProgress | boolean | false | Any Cart request progress status
isFetched | boolean | false | Displays shopping cart state is fetched
hasError | boolean | false | Any request reject error message
errorMessage | string | empty string | Any request reject error message
cart | object | empty object | Shopping cart items details
currency | object | empty object | Shopping cart items currency
isNoCentsCurrency | boolean | false | Display currency without cents
noCentsCurrencyList | array | predefined values | List of currency codes without cents display

----------------

#### State selectors:

```javascript
import { useSelector } from "react-redux";
import * as selectors from "selectors/shoppingCart.selectors";
```

**getShoppingCart** _object_
> Get full state of shopping cart
```javascript
const {
	isEmpty, inProgress, isFetched, hasError, errorMessage, cart, currency, isNoCentsCurrency,
} = useSelector(selectors.getShoppingCart);
```

**getInProgress** _boolean_
> Get current status of cart requests
```javascript
const inProgress = useSelector(selectors.getInProgress);
```

**getIsFetched** _boolean_
> Get load status of shopping cart state
```javascript
const isFetched = useSelector(selectors.getIsFetched);
```

**getIsEmpty** _boolean_
> Get status of empty cart state
```javascript
const isEmpty = useSelector(selectors.getIsEmpty);
```

**getHasError** _boolean_
> Get error flag of ant cart request
```javascript
const hasError = useSelector(selectors.getHasError);
```

**getErrorMessage** _string_
> Get error message of any cart request
```javascript
const errorMessage = useSelector(selectors.getErrorMessage);
```

**getCart** _object_
> Get full cart data
```javascript
const cartItems = useSelector(selectors.getCart);
```

**getCurrency** _object_
> Get currency data of cart prices
```javascript
const currency = useSelector(selectors.getCurrency);
```

**currencySymbol** _string_
> Get currency symbol of cart prices
```javascript
const currencySymbol = useSelector(selectors.getCurrencySymbol);
```

**currencyCode** _string_
> Get currency code of cart prices
```javascript
const currencyCode = useSelector(selectors.getCurrencyCode);
```

**isDomainExist** _boolean_
> Check is domain name key exists in cart items
```javascript
const hasDomain = useSelector(selectors.isDomainExist(/* domainName */));
```

**isProductExistByKey** _boolean_
> Check is product key exists in cart items
```javascript
const hasProduct = useSelector(selectors.isProductExistByKey(/* productKey */));
```

**filterItemsByOptionId** _object_
> Get collection of cart items filtered by optionId param
```javascript
const cartItemsByOptionId = useSelector(selectors.filterItemsByOptionId(/* optionId */));
```

**filterItemsByProductId** _object_
> Get collection of cart items filtered by productId param
```javascript
const cartItemsByProductId = useSelector(selectors.filterItemsByProductId(/* productId */));
```

**filterItemsByType** _object_
> Get collection of cart items filtered by type param
```javascript
const cartItemsByType = useSelector(selectors.filterItemsByType(/* type */));
```

**filterItemsByDomain** _object_
> Get collection of cart items filtered by domain param
```javascript
const cartItemsByDomain = useSelector(selectors.filterItemsByDomain(/* domain */));
```

**filterItemsByIsGift** _object_
> Get collection of cart items filtered by isGift param
```javascript
const cartItemsByGift = useSelector(selectors.filterItemsByIsGift(/* isGift */));
```

**filterItemsByAction** _object_
> Get collection of cart items filtered by action param
```javascript
const cartItemsAction = useSelector(selectors.filterItemsByAction(/* action */));
```

**filterItemsWithParentKey** _object_
> Get collection of cart items filtered with parentKey param
```javascript
const cartItemsWithParent = useSelector(selectors.filterItemsWithParentKey);
```

**filterItemsWithoutParentKey** _object_
> Get collection of cart items filtered without parentKey param
```javascript
const cartParentItems = useSelector(selectors.filterItemsWithoutParentKey);
```

**filterItemsByParentKey** _object_
> Get collection of cart items filtered by parentKey param
```javascript
const cartItemsByParent = useSelector(selectors.filterItemsByParentKey(/* parentKey */));
```

**getCartDomains** _object_
> Alias for filterItemsByType with predefined type "domain"
```javascript
const cartDomains = useSelector(selectors.getCartDomains);
```

**getTotalPrice** _number_
> Return calculated total price of all items in cart
```javascript
const totalPrice = useSelector(selectors.getTotalPrice);
```

**isNoCentsCurrency** _boolean_
> To display current currency without cents
```javascript
const noCents = useSelector(selectors.isNoCentsCurrency);
```

**getTaxName** _boolean_
> To display name of site tax type (GST, Tax)
```javascript
const taxName = useSelector(selectors.getTaxName);
```

-------------

#### Actions API:

```javascript
import { useDispatch } from "react-redux";
import * as actions from "actions/shoppingCart.actions";
```

**getCart** _Promise_
> Request to get current cart items.

Call stack:
 - setInProgress > true
 - api.getCart
 - then
   - setInProgress > false
   - setIsFetched > true
   - setError > ""
   - setCart > response.data.cart
   - setCurrency > response.data.currency
   - return response.data
 - catch
   - setInProgress > false
   - setIsFetched > false
   - setError > response.message

```javascript
dispatch(actions.getCart());
```

**itemsAdd** _Promise_
> Set current status of cart requests

Call stack:
 - setInProgress > true
 - api.cartItemAdd
 - then
   - setInProgress > false
   - setError > ""
   - setCart > response.data.cart
   - setCurrency > response.data.currency
   - return response.data
 - catch
   - setInProgress > false
   - setError > response.message

param | type | desc
------------ | ------------- | -------------
keys | array | keys to add to cart
actions | array | processing action for each key in request
periods | array | optional. period value for each key in request
original | boolean | optional. processing value, represents keys to be added NOT from promo code
disablePromo | boolean | optional. processing value, disable all promo codes for keys in request

```javascript
dispatch(actions.itemsAdd({
    keys: [],
    actions: [],
}, /* optional */{
    periods: [],
    original: false,
    disablePromo: false,
}));
```

**itemsRemove** _Promise_
> Request to remove cart items by keys

Call stack:
 - setInProgress > true
 - api.cartItemRemove
 - then
   - setInProgress > false
   - setError > ""
   - setCart > response.data.cart
   - setCurrency > response.data.currency
   - return response.data
 - catch
   - setInProgress > false
   - setError > response.message

param | type | desc
------------ | ------------- | -------------
keys | array | keys to remove from cart

```javascript
dispatch(actions.itemsRemove({
    keys: [],
}));
```

**itemsChangePeriod** _Promise_
> Request to change cart items period value by keys

Call stack:
 - setInProgress > true
 - api.cartItemChangePeriod
 - then
   - setInProgress > false
   - setError > ""
   - setCart > response.data.cart
   - setCurrency > response.data.currency
   - return response.data
 - catch
   - setInProgress > false
   - setError > response.message

param | type | desc
------------ | ------------- | -------------
keys | array | cart items keys to update period value
periods | array | period value for each key in request

```javascript
dispatch(actions.itemsChangePeriod({
    keys: [],
    periods: [],
}));
```

**addDomainToCart** _Promise_
>  Alias for **itemsAdd** request with predefined params:
>    - "original"
>    - modified "action"
>    - modified "period"
>    - "disablePromo"

param | type | desc
------------ | ------------- | -------------
domain | string | domain to add to cart
action | string | processing action for domain in request
period | number/string | period value for domain in request
disablePromo | boolean | optional. processing value, disable all promo codes domain in request. FALSE by default.

```javascript
dispatch(actions.addDomainToCart({
    domain: "",
    action: "",
    period: 0,
    // optional
    disablePromo: false,
}));
```

-------------

#### Actions:

```javascript
import { useDispatch } from "react-redux";
import * as actions from "actions/shoppingCart.actions";
```

**toDefault**
> Reset shopping cart state to default values
```javascript
dispatch(actions.toDefault());
```

**setIsLoading**
> Set current status of cart requests

param | type
------------ | -------------
inProgress | boolean

```javascript
dispatch(actions.setInProgress(/* inProgress */));
```

**setIsFetched**
> Set load status of shopping cart state

param | type
------------ | -------------
isFetched | boolean


```javascript
dispatch(actions.setIsFetched(/* isFetched */));
```

**setError**
> Set error message and error flag any cart request

param | type
------------ | -------------
errorMessage | string


```javascript
dispatch(actions.setError(/* errorMessage */));
```

**setCart**
> Set current cart items collection

param | type
------------ | -------------
cart | object


```javascript
dispatch(actions.setCart(/* cart */));
```

**setCurrency**
> Set current cart currency for items.
>
> Set isNoCentsCurrency by currency id. Check currency id in noCentsCurrencyList

param | type
------------ | -------------
currency | object


```javascript
dispatch(actions.setCurrency(/* currency */));
```
