import Binance, { OrderBook } from 'binance-api-node'
import { BINANCE_EXCHANGE } from "../config/settings"
import { BinanceClientError } from '../errors/BinanceError';
import { ExchanceOrderBookResponseType } from '../types/exchange';

const client = Binance()

export const getProductOrderBook = async (): Promise<ExchanceOrderBookResponseType> => {
    try {

        const product: OrderBook = await client.book({ symbol: 'BTCUSDT', limit: 50 });

        const result: ExchanceOrderBookResponseType = {
            exchange: BINANCE_EXCHANGE,
            result: product
        }
        return result;
    } catch (error) {
        throw new BinanceClientError()
    }
};
