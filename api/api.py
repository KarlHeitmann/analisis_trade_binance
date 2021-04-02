import time
import os
from flask import Flask
from flask import request
import pdb

import pandas as pd
import ta

# from bot.connectors.binance_futures import BinanceFuturesClient
# from bot.strategies import BreakoutStrategy

from binance_futures import BinanceFuturesClient

app = Flask(__name__)
binance = BinanceFuturesClient(os.environ['BINANCE_KEY'], os.environ['BINANCE_SECRET'], True, 'cut')
contracts = binance.get_contracts()

time_frame = '1m'
symbol = 'BTCUSDT'

@app.route('/ta', methods=['POST'])
def technical_analysis():
    # request.args is to get urls arguments
    print("/TA.......................")
    # print(request)
    # print(request.json)
    candles = request.json['candles']
    df = pd.DataFrame(data=candles)
    ema_fast = ta.trend.ema_indicator(df.close, 9)
    ema_medium = ta.trend.ema_indicator(df.close, 26)
    ema_slow = ta.trend.ema_indicator(df.close, 50)
    # print(candles)
    # print(ema_fast)
    # asd = [ema_fast.iloc[:10], ema_fast.iloc[10:]]
    print(df)
    print(ema_fast)
    asd = [df.close.iloc[:10], ema_fast.iloc[10:]]
    print("asd")
    print(asd)
    # ema_fast_ready = [df.close.iloc[:10], ema_fast.iloc[10:]]
    # ema_medium_ready = [df.close.iloc[:27], ema_medium.iloc[27:]]
    # ema_slow_ready = [df.close.iloc[:51], ema_slow.iloc[51:]]

    ema_fast_ready = pd.concat([df.close.iloc[:10], ema_fast.iloc[10:]])
    ema_medium_ready = pd.concat([df.close.iloc[:27], ema_medium.iloc[27:]])
    ema_slow_ready = pd.concat([df.close.iloc[:51], ema_slow.iloc[51:]])
    # print(ema_fast.iloc[:10])
    # print(ema_fast.iloc[10:])
    print(type(ema_fast_ready))
    print(ema_fast_ready)
    # pdb.set_trace()
    return {
        'ready': True, 'df': df.to_dict(),
        # 'ema_fast': ema_fast.iloc[10:].to_dict(),
        # 'ema_medium': ema_medium.iloc[27:].to_dict(),
        # 'ema_slow': ema_slow.iloc[51:].to_dict(),
        # 'ema_fast': ema_fast.to_dict(),
        # 'ema_medium': ema_medium.to_dict(),
        # 'ema_slow': ema_slow.to_dict(),
        'ema_fast': ema_fast_ready.to_dict(),
        'ema_medium': ema_medium_ready.to_dict(),
        'ema_slow': ema_slow_ready.to_dict(),
    }


@app.route('/symbols')
def get_symbols():
    global binance, contracts
    symbols = []
    for symbol, contract in contracts.items():
        symbols.append(symbol)
    return {"symbols": symbols}

@app.route('/candles/<symbol>/<tf>')
def get_candles(symbol, tf):
    global binance, contracts

    candles_raw = binance.get_historical_candles(contracts[symbol], tf)

    candles = {}
    candles['close'] = [ candle.data_dict['close'] for candle in candles_raw ]
    candles['open'] = [ candle.data_dict['open'] for candle in candles_raw ]
    candles['high'] = [ candle.data_dict['high'] for candle in candles_raw ]
    candles['low'] = [ candle.data_dict['low'] for candle in candles_raw ]
    candles['volume'] = [ candle.data_dict['volume'] for candle in candles_raw ]
    candles['timestamp'] = [ candle.data_dict['timestamp'] for candle in candles_raw ]

    df = pd.DataFrame(data=candles)
    df = ta.add_all_ta_features(df, "open", "high", "low", "close", "volume", fillna=True)


    return {'candles': candles, 'df': df.to_dict()}
    # return {'candles': candles, 'df': df.to_json()}
    # return {'candles': candles}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}