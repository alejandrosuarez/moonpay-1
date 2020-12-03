# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

Libraries added :

- grommet and grommet icon : Used for the design, it's a UI framework. I used it mainly for toggle buttons.
- styled-components: I used it to override the grommet theme.
- isomorphic-fetch: Library to use fetch
- redux, react-redux : Redux library to manage the state of the web application
- webpack, webpack-cli : a module to generate bundles of the modern javascript application.
- webpack-dev-server: I use it for the hot reload with webpack
- url-loader, style-loader, sass-loader, css-loader : loader to be manage by webpack
- html-webpack-plugin : a webpack module to simplify the creation of HTML files
- mini-css-extract-plugin: a webpack module to manage the creation of css files
- jest: To test the code
- babel: to compile to an old generation of javascript to be read in old browsers

### Q) What's the command to start the frontend application locally?

Start the dev server and navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files. The command to start is :

    $ npm start

### Q) What libraries did you add to the backend? What are they used for?

Libraries added:

- typescript and ts-node: To use typescript in the code
- nodemon: for the hot reload
- env-cmd: To execute commands using an environment from an env file
- coinbase-pro: Coinbase api, to get info from Coinbase
- binance-api-node: Binance api, to get info from Binance
- kraken-api: Kraken api, to get info from Kraken
- object-mapper: To map an object from an exchange to a generic object.

### Q) What's the command to start the backend application locally?

Start the dev server and navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files. The command to start is :

    $ npm start

The url is `localhost:3000/exchange?amount=1` with HTTP method GET and the paramter: `amount`

---

# General:

### Q) If you had more time, what further improvements or new features would you add?

Obviously I would develop more tests.
I would add the the currency from the amount as a parameter to the exchanges api and the currency of the price also. For exemple if I want the Euro price of 1 Ethereum.
I also would connect the front with the back and develop a compoennt in the front to manage this new feature.
And create a specific page for all cryptocurrency.

### Q) Which parts are you most proud of? And why?

On the backend, I like the factory pattern used, because I like when I can use Design Pattern to have a pretty code, clean and reusable.

### Q) Which parts did you spend the most time with? What did you find most difficult?

I spent more time on the backend. The most difficult was maybe to manage all differents responses from the differents exchange API. I spent time to looking a library like modelmapper for JAVA. And I decided to use object-mapper library.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.

Great test. I like to do tests like that where I can create a little project rather complete in few days. Nice challenge thanks. It also was interesting to have challenge in SQL.
Maybe add the routing to a specific page for all crytocurrency.
