# restro.examples

![npm downloads](https://img.shields.io/npm/dm/restro.svg)

> Sample applications using Restro (https://github.com/Srdjan/restro)

<h3>Apple-farm</h3>

To run the example, clone git repo: 
    
```sh
git clone https://github.com/Srdjan/restro.examples.git
```

Goto Apple-farm folder:

```sh
cd apple-farm
```

then:

```sh
npm install
npm start //or: node index.js
```

Open the browser, and navigate to: 

<code>http://localhost:8080/</code>

When the API Explorer loads, go the main entry feld and type: 

<code>/api/apples</code>

use <button>create</button> button to create first apple and follow the links :)

JSON format example for 'Create': 
```javascript
{ "weight": 10, "color": "red" }
```
JSON format example for 'Grow': 
```json
{ "weightIncr": 120, }
```
...

# License

The MIT License (MIT)
