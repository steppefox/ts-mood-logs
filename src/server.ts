import express from 'express';
import { getIndexController } from './controllers/index'

const app = express();
const port = 3000;

app.get('/', getIndexController);

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
