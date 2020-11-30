import { ErrorHandler } from "../errors/ErrorHandler"
abstract class KrakenError extends ErrorHandler {
    constructor(message: string) {
        super(message);
    }

}

export class KrakenClientError extends KrakenError {
    constructor() {
        super(KrakenClientError.name);
    }
}