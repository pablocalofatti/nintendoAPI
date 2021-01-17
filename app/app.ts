import Express from 'express';
import BodyParser from 'body-parser';
import Cors from 'cors';

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.use(Cors());
// app.use(routes());

export default app;