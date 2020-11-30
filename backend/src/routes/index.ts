import { Router } from 'express';
import exchangeRouter from './exchange.routes'

const routes = Router();

routes.use(exchangeRouter);

export default routes;