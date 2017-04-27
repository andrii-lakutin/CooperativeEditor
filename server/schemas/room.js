import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let Room = mongoose.model('Room', new Schema({
	id: ObjectId,
	name: String,
	users: [],
	editorValue: String,
	chatMessages: []
}));

export default Room;