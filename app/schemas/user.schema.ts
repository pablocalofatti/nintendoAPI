import mongoose, { Schema } from 'mongoose';

export interface IUser extends mongoose.Document {
    userName: string;
    email: string;
    password: string;
    favoriteGames: Array<object>;
}

const UserSchema = new Schema({
    userName: {type: String, unique: true, trim: true, required: true},
    email: String,
    password: {type: String, unique: true, trim: true, required: true},
    favoriteGames: [{type:Object}]
});

export default mongoose.model<IUser>('User', UserSchema);