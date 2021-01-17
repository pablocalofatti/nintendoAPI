import mongoose, { Schema } from "mongoose";

export interface IGame extends mongoose.Document {
    name: string;
    description: string;
    minimumAge: number;
    coverPicture: string;
}


const GameSchema = new Schema({
    name: String,
    description: String,
    minimumAge: Number,
    coverPicture: String
});


export default mongoose.model<IGame>('Game', GameSchema);