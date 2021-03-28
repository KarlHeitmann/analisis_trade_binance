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

@app.route('/symbols')
def get_symbols():
    global binance, contracts
    symbols = []
    for symbol, contract in contracts.items():
        symbols.append(symbol)
    return {"symbols": symbols}

@app.route('/candles')
def get_candles():
    global binance, contracts
    headers = ['close', 'open', 'high', 'low']
    print("STRATEGY----------------", binance)
    candles_raw = binance.get_historical_candles(contracts['BTCUSDT'], '1h')
    # print(candles)
    candles = {}
    # candles['close'] = [ candle.close for candle in candles_raw ]
    # candles['open'] = [ candle.open for candle in candles_raw ]
    # candles['high'] = [ candle.high for candle in candles_raw ]
    # candles['low'] = [ candle.low for candle in candles_raw ]
    # candles['volume'] = [ candle.volume for candle in candles_raw ]
    # candles['timestamp'] = [ candle.timestamp for candle in candles_raw ]

    candles['close'] = [ candle.data_dict['close'] for candle in candles_raw ]
    candles['open'] = [ candle.data_dict['open'] for candle in candles_raw ]
    candles['high'] = [ candle.data_dict['high'] for candle in candles_raw ]
    candles['low'] = [ candle.data_dict['low'] for candle in candles_raw ]
    candles['volume'] = [ candle.data_dict['volume'] for candle in candles_raw ]
    candles['timestamp'] = [ candle.data_dict['timestamp'] for candle in candles_raw ]


    return {'candles': candles}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}