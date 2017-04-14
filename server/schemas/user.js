//This is schema for users, who use our app.
import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let User = mongoose.model('User', new Schema({
	id: ObjectId,
	nickname: String
}));

export default User;