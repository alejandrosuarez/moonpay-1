// @ts-ignore
import KrakenClient from 'kraken-api';
import { ExchanceOrderBookResponseType } from '../types/exchange';
import { KRAKEN_EXCHANGE } from "../config/settings"
import { KrakenClientError } from "../errors/KrakenError"
const client = new KrakenClient();

export const getProductOrderBook = async (): Promise<ExchanceOrderBookResponseType> => {
    try {
        const { result } = await client.api('Depth', { pair: "XXBTZUSD" });

        const product: ExchanceOrderBookResponseType = {
            exchange: KRAKEN_EXCHANGE,
            result: result['XXBTZUSD']
        }
        return product;
    } catch (error) {
        throw new KrakenClientError()
    }
};
