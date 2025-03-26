import { Router } from "express";

import userController from "./controllers/userController.js";
import bookController from "./controllers/bookController.js";

const routes = Router();

routes.use('/users', userController);
// routes.use('/data/catalog', furnitureController);
routes.use('/data/bookCatalog',bookController)
export default routes;
