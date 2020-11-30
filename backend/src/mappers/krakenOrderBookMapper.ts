import { merge } from 'object-mapper';
import { ExchanceOrderBookResponseType } from "../types/exchange";
import { OrderBookApiResponseType } from "../types/orderBook";

const mapper = (orderBook: ExchanceOrderBookResponseType): OrderBookApiResponseType => {

    let mapping = {
        "result.bids[].[0]": "bids[].price",
        "result.bids[].[1]": "bids[].quantity",
        "exchange": "exchange"
    }

    return <OrderBookApiResponseType>merge(orderBook, mapping);
}

export default mapper;