import { Router } from 'express';
import { IndexCtrl } from '../controllers/index.ctrl';

const indexRouter = Router();
const indexCtrl = new IndexCtrl();

indexRouter.get('/', indexCtrl.hello);

export default indexRouter;