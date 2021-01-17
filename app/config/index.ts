import DotEnv from 'dotenv';

DotEnv.config();

const ENVIRONMENT = process.env.NODE_ENV || 'development';

if (ENVIRONMENT !== 'production') {
    DotEnv.config();
}

const configFile = `./${ENVIRONMENT}`;
const isObject = (variable: any) => variable instanceof Object;

/*
 * Deep copy of source object into tarjet object.
 * It does not overwrite properties.
 */
const assignObject = (target: any, source: any) => {
  if (target && isObject(target) && source && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(target, key) || target[key] === undefined) {
        target[key] = source[key];
      } else {
        assignObject(target[key], source[key]);
      }
    });
  }
  return target;
};

const config = {
  common: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    api: {
      bodySizeLimit: process.env.API_BODY_SIZE_LIMIT,
      parameterLimit: process.env.API_PARAMETER_LIMIT,
      port: process.env.PORT
    },
    session: {
      header_name: 'Authorization',
      secret: process.env.NODE_API_SESSION_SECRET,
      expirationTime: process.env.JWT_EXPIRATION_TIME,
      refreshExpirationTime: process.env.JWT_REFRESH_EXPIRATION_TIME
    },
  }
};
const customConfig = require(configFile);
const configResult = assignObject(customConfig, config);

export default configResult