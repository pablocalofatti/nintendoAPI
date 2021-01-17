import { Router } from 'express';
import { GameController } from '../controllers';

const router = Router();
const gameController = new GameController();

router.get('/', gameController.getAll);

export default router;