import { Router } from 'express';
import AuthMiddleware from '../middleware/auth';
import { UserController } from '../controllers';

const router = Router();
const userController = new UserController();


router.post('/', userController.register);
router.post('/authenticate', userController.authenticate)
router.put('/add-game', AuthMiddleware, userController.addGame)
router.get('/', AuthMiddleware, userController.get)

export default router;