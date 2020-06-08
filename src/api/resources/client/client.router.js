import express from 'express';
import clientController from './client.controller';
import multer from 'multer';
import path from 'path';
import { sanitize } from '../../../middleware/sanitizer';
import { validateBody, schemas } from '../../../middleware/validator';


export const clientRouter = express.Router();
clientRouter.route('/register').post(sanitize(), clientController.addClient);


