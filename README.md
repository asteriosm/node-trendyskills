# Node-TrendySkills
-----

Node Client library to use the [trendyskills](http://trendyskills.com/) API

# Installation
-----

```javascript
npm install --save node-trendyskills
```

# Usage
-----

### API Key

Before integrating the Trendy Skills API to your application you have to obtain a unique API key for the domain that it is going to be used with.
Each domain can have only one API key.
To generate a new unique API key for your application please click [here](http://trendyskills.com/index.php/api/api_key)


### Node.js
```javascript
var ts = require('node-trendyskills')('YOUR_API_KEY_HERE');
```

### - status()
Checks and returns the status of the web service

```javascript
ts.status().get().then(json => {
    console.log(json);
});
// { success: true,
//   numValues: '1',
//   status: 'ok',
//   links: { self: [ [Object], [Object] ] } }
```

### - keywords()
Search for a keyword name

```javascript
ts.keywords().like('java').get().then(json => {
    console.log(json);
});
// { success: true,
//   category: 'allKeywords',
//   numValues: 5,
//   keywords: 
//    [ { id: '915', keyName: 'Java' },
//      { id: '577', keyName: 'Java 3D' },
//      { id: '564', keyName: 'Java Advanced Imaging' },
//      { id: '587', keyName: 'Java API for XML-Based RPC' },
//      { id: '556', keyName: 'Java Authentication and Authorization Service' } ],
//   links: { self: [ [Object], [Object] ] } }
```

### -categories()
Search for a category name

```javascript
ts.categories().like('languages').get().then(json => {
    console.log(json);
});
// { success: true,
//   category: 'allCategories',
//   numValues: 1,
//   categories: [ { id: '8', catName: 'Languages', parentID: '0' } ],
//   links: { self: [ [Object], [Object] ] } }
```

### -keywordNoDate()
Number of occurrencies of defined keywords throughout the whole available date.

```javascript
ts.keywordNoDate().keyID(915).keyID(691).get().then(json => {
    console.log(json);
});
```

### -keywordDate()
Number of occurencies of defined keywords in a specific date range

```javascript
ts.keywordDate().keyID(915).keyID(691).fromDate('2013/02/17').toDate('2013/02/24').get().then(json => {
    console.log(json);
});
```

### -categoryNoDate()
Number of occurrencies of defined categories throughout the whole available date.

```javascript
ts.categoryNoDate().catID(5).catID(6).get().then(json => {
    console.log(json);
});
```

### -categoryDate()
Number of occurencies of defined categories in a specific date range

```javascript
ts.categoryDate().catID(5).catID(6).fromDate('2013/02/17').toDate('2013/02/24').get().then(json => {
    console.log(json);
});
```

### -filterAmbiguous()
Filter the occurencies based on pattern recognition algorithm (experimental)

```javascript
ts.keywordDate().keyID(915).keyID(691).fromDate('2013/02/17').toDate('2013/02/24').filterAmbiguous(false).get().then(json => {
    console.log(json);
});
```

### -analyticDate()
Get analytic occurencies day by day

```javascript
ts.keywordDate().keyID(915).keyID(691).fromDate('2013/02/17').toDate('2013/02/24').analyticDate(true).get().then(json => {
    console.log(json);
});
```

For more information on basic options and optional parameters please click [here](http://trendyskills.com/api)
