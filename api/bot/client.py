import tkinter as tk
import logging
import os

from connectors.binance_futures import BinanceFuturesClient
from connectors.bitmex import BitmexClient

from strategies import Strategy, TechnicalStrategy, BreakoutStrategy



logger = logging.getLogger()

# logger.setLevel(logging.DEBUG)
logger.setLevel(logging.INFO)

stream_handler = logging.StreamHandler()
# formatter = logging.Formatter('%(asctime)s %(levelname)s {%(pathname)s:%(lineno)d} %(levelname)s :: %(message)s')
formatter = logging.Formatter('%(asctime)s %(levelname)s {%(filename)s:%(lineno)d} %(levelname)s :: %(message)s')
stream_handler.setFormatter(formatter)
stream_handler.setLevel(logging.INFO)

file_handler = logging.FileHandler('info.log')
file_handler.setFormatter(formatter)
file_handler.setLevel(logging.DEBUG)

logger.addHandler(stream_handler)
logger.addHandler(file_handler)

# logger.debug("This message is important only when debugging the program")
# logger.info("This message just shows basic information")
# logger.warning("This message is about something you should care about")
# logger.error("This message helps you to debug an error that occured in the program")
def run(binance_key, binance_secret, bitmex_id, bitmex_secret):
    binance = BinanceFuturesClient(binance_key, binance_secret, True, 'cut')
    # bitmex = BitmexClient(bitmex_id, bitmex_secret, True)
    contracts = binance.get_contracts()
    symbol = 'BTCUSDT'
    contract = contracts[symbol]
    other_param = {
        'min_volume': 0
    }
    time_frame = '1m'

    strategy = BreakoutStrategy(binance, contract, 'binance', time_frame, 0.1, 0.1, 0.1, other_param)
    binance.strategies[symbol] = strategy

    strategy.candles = binance.get_historical_candles(contract, time_frame)


if __name__ == '__main__':
    run(os.environ['BINANCE_KEY'], os.environ['BINANCE_SECRET'], os.environ['BITMEX_ID'], os.environ['BITMEX_SECRET'])

