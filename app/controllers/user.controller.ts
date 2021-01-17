import { Response, NextFunction} from 'express';
import { UserService } from '../services/index';
import loggerInfo from "../logger/bunyan";
import { IGetUserAuthInfoRequest } from '../interfaces/index';

export class UserController {

    public async register(req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) {

        try {
            const response = await new UserService().create(req.body);
            res.send(response);
        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            res.send({error: error.name, message: error.message, status: error.status || 500});
        }
    }

    public async authenticate(req: IGetUserAuthInfoRequest, res:Response) {

        try {
            const response = await new UserService().login(req.body);
            res.send(response);
        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            res.send({error: error.name, message: error.message, status: error.status || 500});
        }
    }

    public async addGame(req: IGetUserAuthInfoRequest, res:Response) {

        try {
            const response = await new UserService().addNewGame(req.body, req.user);
            res.send(response);
        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            res.send({error: error.name, message: error.message, status: error.status || 500});
        }
    }

    public async get(req: IGetUserAuthInfoRequest, res:Response) {

        try {
            const response = await new UserService().getUser(req.user);
            res.send(response);
        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            res.send({error: error.name, message: error.message, status: error.status || 500});
        }
    }
}