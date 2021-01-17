import mongoose, { Schema } from 'mongoose';
import { IGame } from './game.schema';

export interface IUser extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    favoriteGames: IGame[];
}

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    favoriteGames: [{ type: Schema.Types.ObjectId, ref: "Game"}]
});

export default mongoose.model<IUser>('User', UserSchema);