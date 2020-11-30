import iExchange from "./iExchange";
import { OrderBookRequestType, OrderBookResponseType, OrderBookApiResponseType } from "../types/orderBook"
import * as BinanceApi from "../services/binance"
import mapper from "../mappers/binanceOrderBookMapper"
import { ExchanceOrderBookResponseType } from '../types/exchange';
import { calculatePrice } from "../lib/helpers"
import { BinanceClientError } from "../errors/BinanceError"

export default class BinanceExchange implements iExchange {

    public getValueFromOrderBook = async (orderBookRequest: OrderBookRequestType): Promise<OrderBookResponseType> => {
        try {
            const binanceProduct: ExchanceOrderBookResponseType = await BinanceApi.getProductOrderBook()

            const binanceOrderBook: OrderBookApiResponseType = mapper(binanceProduct);

            return calculatePrice(binanceOrderBook, orderBookRequest);
        } catch (error) {
            throw new BinanceClientError()
        }

    }
}