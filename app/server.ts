import loggerInfo from './logger/bunyan';
import app from './app';
import config from './config/index';

const port = config.common.api.port || 5000;

app.listen((port), () => {
    loggerInfo.info(`App listening on port ${port}!`);
});