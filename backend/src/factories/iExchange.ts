import { OrderBookRequestType, OrderBookResponseType } from "../types/orderBook";

/**
 * The Exchange Interface declare methods that all concrete Exchange must implement
 */
export default interface iExchange {
    // Method to return the price of a currency's amount 
    getValueFromOrderBook(orderBookRequest: OrderBookRequestType): Promise<OrderBookResponseType>;
}
