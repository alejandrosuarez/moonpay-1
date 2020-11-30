import { merge } from 'object-mapper';
import { ExchanceOrderBookResponseType } from "../types/exchange";
import { OrderBookApiResponseType } from "../types/orderBook";

const mapper = (orderBook: ExchanceOrderBookResponseType): OrderBookApiResponseType => {

    let mapping = {
        "result.bids": "bids",
        "exchange": "exchange"
    }

    return <OrderBookApiResponseType>merge(orderBook, mapping);
}

export default mapper;