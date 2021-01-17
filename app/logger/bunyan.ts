import Bunyan from 'bunyan';

const loggerInfo = Bunyan.createLogger({
    name: "Nintendo API",
    level: "info",
    stream: process.stdout,
});

export default loggerInfo;
