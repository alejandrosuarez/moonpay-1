import { ErrorHandler } from "../errors/ErrorHandler"
abstract class BinanceError extends ErrorHandler {
    constructor(message: string) {
        super(message);
    }

}

export class BinanceClientError extends BinanceError {
    constructor() {
        super(BinanceClientError.name);
    }
}