import time
import os
from flask import Flask

from bot.connectors.binance_futures import BinanceFuturesClient
from bot.strategies import BreakoutStrategy


app = Flask(__name__)

time_frame = '1m'
symbol = 'BTCUSDT'
binance = None
contracts = None
contract = None
strategy = None

other_param = {
    'min_volume': 0
}

@app.route('/start')
def get_start():
    print("START")
    global binance, contracts, contract, strategy
    binance = BinanceFuturesClient(os.environ['BINANCE_KEY'], os.environ['BINANCE_SECRET'], True, 'cut')
    contracts = binance.get_contracts()
    contract = contracts[symbol]
    strategy = BreakoutStrategy(binance, contract, 'binance', time_frame, 0.1, 0.1, 0.1, other_param)
    strategy.candles = binance.get_historical_candles(contract, time_frame)
    binance.strategies[symbol] = strategy
    binance.strategies[0] = strategy
    print("END")
    return {'ready': True}

@app.route('/candles')
def get_candles():
    global strategy
    print("WAWAWAWWAWAWAWAWA")
    print("000000000000000000000")
    print("---------------------------------")

    print("::::::::::::::::::::::::::::::::::::::::::.")

    headers = ['close', 'open', 'high', 'low']
    # candles = {'close': [], 'open': [], 'high': [], 'low': []}

    # candles = [ {'close': candle.close, 'open': candle.open, 'high': candle.high, 'low': candle.low, 'volume': candle.volume} for candle in strategy.candles ]

    # candles = dict()
    # for header in headers:
    #     candles[header] = [  ]
    print("STRATEGY----------------", strategy)
    print(strategy.candles[0])
    candles = {}
    candles['close'] = [ candle.close for candle in strategy.candles ]
    candles['open'] = [ candle.open for candle in strategy.candles ]
    candles['high'] = [ candle.high for candle in strategy.candles ]
    candles['low'] = [ candle.low for candle in strategy.candles ]
    candles['volume'] = [ candle.volume for candle in strategy.candles ]
    candles['timestamp'] = [ candle.timestamp for candle in strategy.candles ]


    return {'candles': candles}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}