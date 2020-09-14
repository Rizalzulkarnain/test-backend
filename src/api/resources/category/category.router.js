import express from 'express';
import categoryController from './category.controller';
import { localStrategy } from '../../../middleware/strategy';

// import multer from 'multer';
// import path from 'path';
import { sanitize } from '../../../middleware/sanitizer';
import { validateBody, schemas } from '../../../middleware/validator';


export const categoryRouter = express.Router();
categoryRouter.route('/create').post(sanitize(), categoryController.index);
categoryRouter.route('/main/list').get(sanitize(), categoryController.mainList);
// categoryRouter.route('/login').post(sanitize(),validateBody(schemas.loginSchema),localStrategy, categoryController.login);




