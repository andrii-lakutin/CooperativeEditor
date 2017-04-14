import express from 'express';
import http from 'http';
import fallback from 'express-history-api-fallback';
//db
import db from './db.js';
import User from "./schemas/user";

let app = express();

const root = __dirname + '/../dist';
app.use(express.static(root));
app.use(fallback('index.html', {root}));

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});