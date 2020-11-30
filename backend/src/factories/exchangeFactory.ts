import iExchange from "./iExchange"
import BinanceExchange from "./binanceExchange"
import CoinbaseExchange from "./coinbaseExchange";
import KrakenExchange from "./krakenExchange";
import { OrderBookRequestType, OrderBookResponseType } from "../types/orderBook"

//We want to extend it and implement the abstract method
export abstract class ExchangeFactory {

    //This is the method real handlers need to implement
    public abstract factoryExchange(): iExchange

    //This is the method we care about, the rest of the business logic resides here
    public getValueFromOrderBookExchange = async (orderBookRequest: OrderBookRequestType): Promise<OrderBookResponseType> => {
        const exchange = this.factoryExchange()
        return exchange.getValueFromOrderBook(orderBookRequest)
    }
}

//Here is where we implement the custom object creation
export class ConcreteExchangeBinance extends ExchangeFactory {

    public factoryExchange(): iExchange {
        return new BinanceExchange()
    }
}

export class ConcreteExchangeCoinbase extends ExchangeFactory {

    public factoryExchange(): iExchange {
        return new CoinbaseExchange()
    }
}

export class ConcreteExchangeKraken extends ExchangeFactory {

    public factoryExchange(): iExchange {
        return new KrakenExchange()
    }
}
