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
categoryRouter.route('/sub-category/create').post(sanitize(), categoryController.subCategoryCreate);
categoryRouter.route('/sub-category/list').get(sanitize(), categoryController.subCategoryList);
categoryRouter.route('/child-category/create').post(sanitize(), categoryController.childCategoryCreate);
categoryRouter.route('/child-category/list').get(sanitize(), categoryController.childCategoryList);




// categoryRouter.route('/login').post(sanitize(),validateBody(schemas.loginSchema),localStrategy, categoryController.login);




