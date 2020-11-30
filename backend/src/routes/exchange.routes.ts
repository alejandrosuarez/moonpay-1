import { Router } from 'express';
import { ConcreteExchangeBinance, ConcreteExchangeCoinbase, ConcreteExchangeKraken } from "../factories/exchangeFactory"
import { OrderBookRequestType } from "../types/orderBook"
import { getValueFromOrderBook, getBestPriceExchange } from "../lib/helpers"
import { validationResult, query } from 'express-validator';

const exchangeRouter = Router();

/**
 * Route to get the best Exchange according to params
 */
exchangeRouter.get('/exchange',
    query('amount')
        .exists()
        .withMessage("Amount is empty")
        .isFloat()
        .withMessage("Amount should be a number")
        .isFloat({ gt: 0 })
        .withMessage("Amount should be greater than 0"),
    async (request, response): Promise<any> => {
        try {
            // Return error if the amount isn't correct
            const error = validationResult(request).formatWith((msg) => msg);
            if (!error.isEmpty()) {
                return response.status(422).json({ error: error.array() });
            }

            // Define the parameters
            const params: OrderBookRequestType = {
                amount: request?.query?.amount,
                currencyAmount: request?.query?.currencyAmount || "BTC",
                currencyPrice: request?.query?.currencyPrice || "USD"
            }

            // Get Order Book according to params by Exchange
            const coinbaseProduct = await getValueFromOrderBook(new ConcreteExchangeCoinbase(), params)
            const binanceProduct = await getValueFromOrderBook(new ConcreteExchangeBinance(), params)
            const krakenProduct = await getValueFromOrderBook(new ConcreteExchangeKraken(), params)

            // Compare Exchanges
            const result = getBestPriceExchange([coinbaseProduct, binanceProduct, krakenProduct])

            return response.status(200).send(result);

        } catch (error) {
            return response.status(500).json({ "error": error.message });
        }

    });

export default exchangeRouter;