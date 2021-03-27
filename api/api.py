import time
import os
from flask import Flask

from bot.connectors.binance_futures import BinanceFuturesClient
from bot.strategies import BreakoutStrategy


app = Flask(__name__)

binance = BinanceFuturesClient(os.environ['BINANCE_KEY'], os.environ['BINANCE_SECRET'], True, 'cut')

@app.route('/candles')
def get_candles():
    contracts = binance.get_contracts()
    symbol = 'BTCUSDT'
    contract = contracts[symbol]
    other_param = {
        'min_volume': 0
    }
    print("WAWAWAWWAWAWAWAWA")
    time_frame = '1m'

    strategy = BreakoutStrategy(binance, contract, 'binance', time_frame, 0.1, 0.1, 0.1, other_param)
    print("000000000000000000000")
    binance.strategies[symbol] = strategy
    print("---------------------------------")

    strategy.candles = binance.get_historical_candles(contract, time_frame)

    print("::::::::::::::::::::::::::::::::::::::::::.")

    headers = ['close', 'open', 'high', 'low']

    # candles = {'close': [], 'open': [], 'high': [], 'low': []}

    # candles = [ {'close': candle.close, 'open': candle.open, 'high': candle.high, 'low': candle.low, 'volume': candle.volume} for candle in strategy.candles ]

    # candles = dict()
    # for header in headers:
    #     candles[header] = [  ]
    candles = {}
    candles['close'] = [ candle.close for candle in strategy.candles ]
    candles['open'] = [ candle.open for candle in strategy.candles ]
    candles['high'] = [ candle.high for candle in strategy.candles ]
    candles['low'] = [ candle.low for candle in strategy.candles ]
    candles['volume'] = [ candle.volume for candle in strategy.candles ]


    return {'candles': candles}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}