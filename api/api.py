import time
import os
from flask import Flask

# from bot.connectors.binance_futures import BinanceFuturesClient
# from bot.strategies import BreakoutStrategy

from binance_futures import BinanceFuturesClient

app = Flask(__name__)
binance = BinanceFuturesClient(os.environ['BINANCE_KEY'], os.environ['BINANCE_SECRET'], True, 'cut')
contracts = binance.get_contracts()

time_frame = '1m'
symbol = 'BTCUSDT'

@app.route('/candles')
def get_candles():
    global binance, contracts
    headers = ['close', 'open', 'high', 'low']
    print("STRATEGY----------------", binance)
    candles = binance.get_contracts(contracts['BTCUSDT', '1m'])
    candles = {}
    candles['close'] = [ candle.close for candle in candles ]
    candles['open'] = [ candle.open for candle in candles ]
    candles['high'] = [ candle.high for candle in candles ]
    candles['low'] = [ candle.low for candle in candles ]
    candles['volume'] = [ candle.volume for candle in candles ]
    candles['timestamp'] = [ candle.timestamp for candle in candles ]


    return {'candles': candles}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}