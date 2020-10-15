import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const Routes = Router();
const upload = multer(uploadConfig);

const url = '/orphanages';

Routes.post(url,upload.array('images') , OrphanagesController.create);
Routes.get(url, OrphanagesController.index);
Routes.get(url + '/:id', OrphanagesController.show);

export default Routes;