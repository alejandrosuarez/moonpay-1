import { ExchangeFactory } from "../factories/exchangeFactory"
import { OrderBookApiResponseType, OrderBookRequestType, OrderBookResponseType, OrderBookBidApiResponseType } from "../types/orderBook"

/**
 * Method to get order book of an exchange according to params thanks to the factory
 * @param exchange 
 * @param orderBookRequest 
 */
export const getValueFromOrderBook = async (exchange: ExchangeFactory, orderBookRequest: OrderBookRequestType): Promise<OrderBookResponseType> => {
    return exchange.getValueFromOrderBookExchange(orderBookRequest)
}

/**
 * Method to compare exchange price and return the best with the lowest price
 * @param exchanges 
 */
export const getBestPriceExchange = (exchanges: Array<OrderBookResponseType>) => {
    return exchanges.reduce((previous, current) => previous.price < current.price ? previous : current);
}

/**
 * Calculate the price for an amount thanks to the order book
 * @param orderBook 
 * @param request 
 */
export const calculatePrice = (orderBook: OrderBookApiResponseType, request: OrderBookRequestType) => {
    // Init the result
    let resultOrderBook: OrderBookResponseType = {
        amount: 0,
        currencyAmount: request.currencyAmount,
        price: 0,
        currencyPrice: request.currencyPrice,
        exchange: orderBook.exchange
    };

    // Loop on each bid to get the price and quantity
    orderBook.bids.some((bid: OrderBookBidApiResponseType) => {
        let price: number = parseFloat(bid.price)
        let size: number = parseFloat(bid.quantity)

        // Cumulate the price and the amount until the amount wished
        if (size <= (request.amount - resultOrderBook.amount)) {
            resultOrderBook.price += (price * size)
            resultOrderBook.amount += size
        } else {
            resultOrderBook.price += (price * (request.amount - resultOrderBook.amount))
            resultOrderBook.amount += (request.amount - resultOrderBook.amount)
        }

        // Stop the loop if the amount is reached
        return (resultOrderBook.amount === request.amount)
    })

    return resultOrderBook;

}