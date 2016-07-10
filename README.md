# restro.examples
Applications using Restro (https://github.com/Srdjan/restro)

<h3>Apple-farm</h3>

To run the example, clone git repo: 
    
  <code>git clone https://github.com/Srdjan/restro.examples.git</code>

Goto Apple-farm folder:

  <code>cd apple-farm</code>

then:

<code>npm install</code>
<code>npm start or node index.js</code>

Open the browser, and navigate to: <code>localhost:8080/</code>

When the API Explorer loads, go the main entry feld and type: 

/api/apples

use 'create' button to create first apple and follow the links :)

JSON format example for 'Create': { "weight": 10, "color": "red" }

JSON format example for 'Grow': { "weightIncr": 120, }

...

