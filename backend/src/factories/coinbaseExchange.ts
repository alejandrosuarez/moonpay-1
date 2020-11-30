import iExchange from "./iExchange";
import { OrderBookRequestType, OrderBookResponseType, OrderBookApiResponseType } from "../types/orderBook"
import * as CoinbaseApi from "../services/coinbase"
import mapper from "../mappers/coinbaseOrderBookMapper"
import { calculatePrice } from "../lib/helpers"
import { ExchanceOrderBookResponseType } from "../types/exchange"
import { CoinbaseClientError } from "../errors/CoinbaseError"

export default class CoinbaseExchange implements iExchange {

    public getValueFromOrderBook = async (orderBookRequest: OrderBookRequestType): Promise<OrderBookResponseType> => {
        try {
            const coinbaseProduct: ExchanceOrderBookResponseType = await CoinbaseApi.getProductOrderBook()

            const coinbaseOrderBook: OrderBookApiResponseType = mapper(coinbaseProduct);

            return calculatePrice(coinbaseOrderBook, orderBookRequest);
        } catch (error) {
            throw new CoinbaseClientError()
        }

    }
}