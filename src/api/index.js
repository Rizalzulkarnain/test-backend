import express from 'express';
import { clientRouter } from './resources/client'
 
export const restRouter = express.Router();
restRouter.use('/user', clientRouter);