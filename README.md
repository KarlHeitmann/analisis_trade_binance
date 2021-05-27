# Analisis Trade Binance.

This is the app:

![image](https://user-images.githubusercontent.com/3003032/119751258-cff8d700-be68-11eb-8599-2e4511153410.png)

As you can see, there is a sidebar where you can choose your favorite coin available in binance. When you click
the coin, it sends a request to the flask server, it asks the information in binance, and then it analyses it with
pandas and the [ta](https://github.com/bukosabino/ta), and it sends back a JSON to the react app, so it can display
a graph using the [plot.ly](https://plotly.com/python/candlestick-charts/) library.

# Installation

The project is built on React.JS and Flask, their base languages are JavaScript and Python3. To install the dependencies,
install first python3 & virtualenv and node.js & yarn. Then, open a terminal and go to the root directory of this project and run

> yarn install

Then, go to the folder `api` and run

> pip install -r requirements

# Running

You must get your Binance API KEY and SECRET KEY, and your BITMEX API KEY and SECRET KEY. Create a file named `.flaskenv` and put this content inside:

```
FLASK_APP=api.py
FLASK_ENV=development
BINANCE_KEY=
BINANCE_SECRET=
BITMEX_ID=
BITMEX_SECRET=
```

As you can see, on the code above there is no BINANCE_KEY, BINANCE_SECRET, BITMEX_ID nor BITMEX_SECRET associated value.
Fill it in with the keys you.

**IMPORTANT NOTE:** By default this app works with the testnet on binance and bitmex. So you must enter your keys of the **testnet** account. 
If you want to go live, you must search the source code to change to live. Note that this must be done on the connector file, or the file that calls it.

Then, open a termina and go to the `api/` folder and run:

> yarn start-api

This command will load the environment variables and will launch the python flask application

Next, open another terminal, go to the root folder of the application and run

> yarn start

This command will launch the react application. You can visit the webapp by going to `localhost:3000`




