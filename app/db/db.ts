import Mongoose from 'mongoose';
import db from '../config/index';
import loggerInfo from '../logger/bunyan';

Mongoose.connect(`${db.common.database.host}:${db.common.database.port}/${db.common.database.name}`,{
    useNewUrlParser: true,
    useCreateIndex: true,
    // user: db.common.database.username,
    // pass: db.common.database.password,
})
    .then((_) => {
        loggerInfo.info('MongoDb connected');    
    })
    .catch((error) => {
        loggerInfo.info(`Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`);
    })
