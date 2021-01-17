import { User } from '../schemas/index';
import loggerInfo from "../logger/bunyan";
import Bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import config from '../config/index';

export class UserModel {
    
    public async createUser (data: any) {

        try {
            const user = new User(data);
            user.password = await Bcrypt.hash(data.password, 12);
            await user.save();
            return {message: 'User created'};

        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            return {error: message};
        }
    }

    public async getUser (userName: string) {

        try {
            const user = await User.findOne({userName});
            return user;

        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            return {error: message};
        }
    }

    public async addGame (userName: string,gameData: any) {

        try {
            const user = await User.findOneAndUpdate({userName: userName},
                gameData, {
                    new: true
                }); 
            return {user, message: 'New game added'};

        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            return {error: message};
        }
    }

    public async login (password: string, userName: string) {

        try {
            const user = await User.findOne({userName});

            if(!user){
                return {message: 'The user doesnt exist'};
            }else{
                if(!Bcrypt.compareSync(password, user.password)){
                    return {message: 'wrong password'};
                }else{
                    const token = JWT.sign({
                        userName: user.userName,
                        id: user._id
                    },
                    'PASS',
                    {
                        expiresIn: config.common.session.expirationTime
                    });
    
                    return {token};
                }
            }
        } catch (error) {
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.error(message);
            return {error: message};
        }
    } 
}