import CoinbasePro from "coinbase-pro";
import { COINBASE_EXCHANGE } from "../config/settings"
import { CoinbaseClientError } from "../errors/CoinbaseError";
import { CoinbaseOrderBookType } from "../types/coinbase"
import { ExchanceOrderBookResponseType } from "../types/exchange";

const client = new CoinbasePro.PublicClient();

export const getProductOrderBook = async (): Promise<ExchanceOrderBookResponseType> => {
  try {

    const product: CoinbaseOrderBookType = await client.getProductOrderBook("BTC-USD", { level: 2 });

    const result: ExchanceOrderBookResponseType = {
      exchange: COINBASE_EXCHANGE,
      result: product
    }

    return result;
  } catch (error) {
    throw new CoinbaseClientError()
  }
};
