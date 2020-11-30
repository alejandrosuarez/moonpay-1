export interface OrderBookResponseType {
    amount: number;
    currencyAmount: string;
    price: number;
    currencyPrice: string;
    exchange: string;
}

export interface OrderBookRequestType {
    amount: number;
    currencyAmount: string;
    currencyPrice: string;
}

export interface OrderBookApiResponseType {
    bids: Array<OrderBookBidApiResponseType>;
    asks: Array<OrderBookBidApiResponseType>;
    exchange: string;
}

export interface OrderBookBidApiResponseType {
    price: string;
    quantity: string;
}
