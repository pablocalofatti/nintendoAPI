import Jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const authMiddleware = async(req: Request, res: Response, next: NextFunction) =>{
    //auth by header
    const authHeader = req.get('Authorization');
    
    if(!authHeader){
        return res.status(401).json({error: 'not authenticated, there is no jwt'});
    }
    //obtain token and verify
    const token = authHeader.split(' ')[1];
    let checkToken;   
    try {
        checkToken = Jwt.verify(token, 'PASS');
        
        //if it is a valid token but there was some error
        if(!checkToken){
            return res.status(401).json({error: 'Not authenticated'});
        }
    } catch (error) {
        res.status(error.status || 500).json({error: error.name, message: error.message});
    }
    next();
}

export default authMiddleware;