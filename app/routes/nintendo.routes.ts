import { Router } from 'express';
import { GameController } from '../controllers';
import AuthMiddleware from '../middleware/auth';


const router = Router();
const gameController = new GameController();

router.get('/', AuthMiddleware, gameController.getAll);

export default router;