export interface CoinbaseOrderBookType {
    lastUpdateId: number;
    asks: Array<[string, string, number]>;
    bids: Array<[string, string, number]>;
}