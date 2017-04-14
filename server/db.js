import mongoose from 'mongoose';

let db = mongoose.connect('mongodb://Lucky:veryhardpassword@ds161400.mlab.com:61400/cooperative_editor');

export default db;