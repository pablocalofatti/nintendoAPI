import { Router } from 'express';
import UserRoutes from './user.routes';
import NintendoRoutes from './nintendo.routes';

const router = Router();

router.use('/user', UserRoutes);

router.use('/nintendo', NintendoRoutes);


export default router;