import { ErrorHandler } from "../errors/ErrorHandler"
abstract class CoinbaseError extends ErrorHandler {
    constructor(message: string) {
        super(message);
    }

}

export class CoinbaseClientError extends CoinbaseError {
    constructor() {
        super(CoinbaseClientError.name);
    }
}