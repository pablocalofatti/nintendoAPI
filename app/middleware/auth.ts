import JWT from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { IGetUserAuthInfoRequest, IPayload } from '../interfaces/index';


const authMiddleware = async(req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) =>{
    //auth by header
    const authHeader = req.get('Authorization');
    
    if(!authHeader){
        return res.status(401).json({error: 'not authenticated, there is no jwt'});
    }
    //obtain token and verify
    const token = authHeader.split(' ')[1];
    let checkToken;   
    try {
        checkToken = JWT.verify(token, 'PASS') as IPayload;
        req.user = checkToken.userName;
        //if it is a valid token but there was some error
        if(!checkToken){
            return res.status(401).json({error: 'Not authenticated'});
        }

    } catch (error) {
        res.status(error.status || 500).json({error: error.name, message: error.message});
        next(error);
    }
    next();
}

export default authMiddleware;