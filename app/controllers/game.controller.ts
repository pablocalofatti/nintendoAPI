import { Request, Response } from 'express';
import { GameService } from '../services';


export class GameController {

    public async getAll(req: Request, res:Response) {
        const { count, offset } = req.body;
        
        try {
            const response = await new GameService().getAll(count, offset);
            if (!response.hasError) {
                return res.status(200).send({games: response.games});
            } else {
                return res.json(response.error);
            } 
        } catch(error: any) { 
            return res.json({error});
        }

    }


}