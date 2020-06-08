import express from "express";
import knex from './database/connection'

import ItemsController from './controllers/ItemsController'
import PointsController from './controllers/pointsController'

const routes = express.Router();

routes.get('/items', ItemsController.getAll);
routes.post('/points', PointsController.create)

export default routes;
