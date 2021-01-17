import mongoose, { Schema } from 'mongoose';

export interface IUser extends mongoose.Document {
    userName: string;
    email: string;
    password: string;
    favoriteGames: {};
}

const UserSchema = new Schema({
    userName: {type: String, unique: true, trim: true, required: true},
    email: String,
    password: {type: String, unique: true, trim: true, required: true},
    favoriteGames: [{
        title:{type: String},
        membership:{type: Boolean},
        coverPicture:{type: String},
        keywords:{type: String},
        minimumAge:{type: Number},
    }]
});

export default mongoose.model<IUser>('User', UserSchema);