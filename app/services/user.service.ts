
import {UserModel} from '../models/User.model';
import loggerInfo from "../logger/bunyan";

export class UserService {

    public userModel = new UserModel();

    public async create (data: any) {

        try {
            const {password, userName} = data;
            if(!password || !userName){
                return { message: 'User name and password are required'}
            }else{
                const user = await this.userModel.createUser(data);
                return user;
            }
        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            return {error: message};
        }
    }

    public async login (data: any) {

        try {
            const {password, userName} = data;
            if(!password || !userName){
                return { message: 'User name and password are required'}
            }
            const user = await this.userModel.login(password, userName);
            return user;

        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            return {error: message};
        }
    } 

    public async addNewGame (data: any, userName: any) {

        try {
            if(!userName || !data) return { message: 'You cant add a game with out user name or game data'}
            const newGame = await this.userModel.addGame(userName, data);
            return newGame
        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            return {error: message};
        }
    }
}