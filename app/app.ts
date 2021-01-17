import Express from 'express';
import BodyParser from 'body-parser';
import Cors from 'cors';
import Routes from './routes';

//start mongodb
import './db/db';

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.use(Cors());
app.use('/api', Routes);

export default app;