import iExchange from "./iExchange";
import { OrderBookRequestType, OrderBookResponseType, OrderBookApiResponseType } from "../types/orderBook"
import * as krakenApi from "../services/kraken"
import mapper from "../mappers/krakenOrderBookMapper"
import { ExchanceOrderBookResponseType } from '../types/exchange';
import { calculatePrice } from "../lib/helpers"
import { KrakenClientError } from "../errors/KrakenError";

export default class KrakenExchange implements iExchange {

    public getValueFromOrderBook = async (orderBookRequest: OrderBookRequestType): Promise<OrderBookResponseType> => {
        try {
            const krakenProduct: ExchanceOrderBookResponseType = await krakenApi.getProductOrderBook()

            const krakenOrderBook: OrderBookApiResponseType = mapper(krakenProduct);

            return calculatePrice(krakenOrderBook, orderBookRequest);
        } catch (error) {
            throw new KrakenClientError()
        }
    }
}